const html = require('html-template-tag');
const layout = require('./layout');

module.exports = pages =>
  layout(html`
    <h3>Pages</h3>
    <hr />
    <form method="GET" action="/wiki/search">
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
    <hr />
    <ul class="list-unstyled">
      <ul>
        ${pages.map(
          ele =>
            html`
              <li><a href="/wiki/${ele.slug}">${ele.title}</a></li>
            `
        )}
      </ul>
    </ul>
  `);
