const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki">
      <div class="bigFlex">
        <div class="form-group">
          <label for="authorName" class="col-sm-2 control-label"
            >Author Name</label
          >
          <div class="col-sm-10">
            <input
              id="authorName"
              name="authorName"
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="title" class="col-sm-2 control-label">Author Email</label>
          <div class="col-sm-10">
            <input
              id="authorEmail"
              name="authorEmail"
              type="authorEmail"
              class="form-control"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="title" class="col-sm-2 control-label">Page Title</label>
          <div class="col-sm-10">
            <input id="title" name="title" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <label for="pageContent" class="col-sm-2 control-label"
            >Page Content</label
          >
          <div class="col-sm-10">
            <textarea
              id="pageContent"
              name="pageContent"
              type="text"
              class="form-control"
            >
            </textarea>
          </div>
        </div>

        <div class="form-group">
          <label for="pageStatus" class="col-sm-2 control-label"
            >Page Status</label
          >
          <div class="col-sm-10">
            <select id="pageStatus" name="pageStatus">
              <option value="open">open</option>
              <option value="closed">closed</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
