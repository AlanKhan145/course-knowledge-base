import { Meilisearch } from 'meilisearch';

const query = process.argv[2] ?? 'space';
const indexName = process.argv[3] ?? 'movies';
if (!process.env.MEILI_HOST || !process.env.MEILI_ADMIN_KEY ||
    process.env.MEILI_ADMIN_KEY.startsWith('REPLACE_')) {
  throw new Error('Thiếu cấu hình MEILI_HOST hoặc MEILI_ADMIN_KEY trong .env');
}
const client = new Meilisearch({
  host: process.env.MEILI_HOST,
  apiKey: process.env.MEILI_ADMIN_KEY,
});
const result = await client.index(indexName).search(query, { limit: 10 });
console.log(`Index: ${indexName}; query: "${query}"`);
console.log(`Kết quả: ${result.estimatedTotalHits ?? result.hits.length}`);
console.table(result.hits.map(hit => ({ id: hit.id, title: hit.title, overview: hit.overview })));
