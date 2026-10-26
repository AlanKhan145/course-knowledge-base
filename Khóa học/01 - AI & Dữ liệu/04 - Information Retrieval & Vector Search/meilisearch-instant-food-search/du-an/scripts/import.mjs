import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Meilisearch } from 'meilisearch';

const DATASETS = {
  movies: {
    source: '../data/movies.json',
    searchable: ['title', 'overview', 'genres'],
    filterable: ['genres', 'releaseYear'],
  },
  recipes: {
    source: '../data/recipes.json',
    searchable: ['title', 'overview', 'ingredients', 'category'],
    filterable: ['category', 'ingredients'],
  },
};

const name = process.argv[2] ?? 'movies';
const dataConfig = DATASETS[name];
if (!dataConfig) {
  throw new Error(`Bộ dữ liệu không hỗ trợ: ${name}. Chọn movies hoặc recipes.`);
}
if (!process.env.MEILI_HOST || !process.env.MEILI_ADMIN_KEY ||
    process.env.MEILI_ADMIN_KEY.startsWith('REPLACE_')) {
  throw new Error('Thiếu MEILI_HOST hoặc MEILI_ADMIN_KEY hợp lệ trong .env');
}

const filePath = fileURLToPath(new URL(dataConfig.source, import.meta.url));
const data = JSON.parse(await readFile(filePath, 'utf8'));
if (!Array.isArray(data) || data.some(item => item.id === undefined)) {
  throw new Error('Dữ liệu phải là mảng JSON với trường id cho từng tài liệu.');
}

const client = new Meilisearch({
  host: process.env.MEILI_HOST,
  apiKey: process.env.MEILI_ADMIN_KEY,
});

async function waitOrFail(task) {
  const done = await client.waitForTask(task.taskUid, { timeout: 60000 });
  if (done.status !== 'succeeded') {
    throw new Error(`Task ${task.taskUid}: ${done.status} — ${JSON.stringify(done.error)}`);
  }
  return done;
}

// Chủ động tạo index với khóa chính id; chạy lại script không tạo trùng.
try {
  await waitOrFail(await client.createIndex(name, { primaryKey: 'id' }));
  console.log(`Đã tạo index ${name}`);
} catch (error) {
  if (error.code !== 'index_already_exists') throw error;
  console.log(`Index ${name} đã tồn tại`);
}

const index = client.index(name);
await waitOrFail(await index.updateSettings({
  searchableAttributes: dataConfig.searchable,
  filterableAttributes: dataConfig.filterable,
}));
console.log('Đã cập nhật thiết lập tìm kiếm và lọc.');

const task = await index.addDocuments(data);
console.log(`Đã gửi ${data.length} tài liệu, taskUid=${task.taskUid}.`);
await waitOrFail(task);
console.log(`Đã lập chỉ mục hoàn tất: ${name}.`);
