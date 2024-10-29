const express = require('express');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../src/App').default;
const app = express();
const PORT = 9000;

app.use('/static', express.static(path.resolve(__dirname, '../dist/client')));

app.get('/', (req, res) => {
  const appHtml = renderToString(React.createElement(App));

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR App</title>
        <link rel="stylesheet" href="/static/app.css">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
