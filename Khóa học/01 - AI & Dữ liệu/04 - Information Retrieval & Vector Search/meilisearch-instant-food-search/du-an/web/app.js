(() => {
  const config = window.MEILI_CONFIG;
  const root = document.querySelector('.container');
  if (!config?.host || !config?.searchKey || !config?.indexName ||
      config.searchKey.startsWith('REPLACE_')) {
    const note = document.createElement('p');
    note.textContent = 'Chưa cấu hình web/config.js. Sao chép từ config.example.js và điền Search API key.';
    note.className = 'notice';
    root.append(note);
    return;
  }

  const { searchClient } = instantMeiliSearch(config.host, config.searchKey);
  const search = instantsearch({ indexName: config.indexName, searchClient });
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
      placeholder: config.indexName === 'recipes' ? 'Ví dụ: mì, trứng, bún…' : 'Ví dụ: space, island…',
      showReset: true,
      showSubmit: true,
    }),
    instantsearch.widgets.configure({ hitsPerPage: 6 }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        empty: 'Không tìm thấy kết quả. Hãy thử từ khóa khác.',
        item: '<article class="result"><h2>{{title}}</h2><p>{{overview}}</p></article>',
      },
    }),
    instantsearch.widgets.pagination({ container: '#pagination' }),
  ]);
  search.start();
})();
