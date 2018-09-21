const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (posts) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
    ${posts.map(post => html`
    <div class='news-item'>
      <p>
        <span class="news-position">${post.id}. ▲</span>
        <a href="/posts/${post.id}">${post.title}</a>
        <small>(by ${post.name})</small>
      </p>
    </div>`
  )}
    </ul>
  </ul>`);

