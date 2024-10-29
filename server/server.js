const express = require('express');
const path = require('path');
const app = express();
const React = require('react');
const App = require('../src/App').default;
const { renderToString } = require('react-dom/server');
const PORT = 3000;

app.use('/client', express.static(path.resolve(__dirname, 'dist/client')));

app.get('/', function (req, res) {
  const appHtml = renderToString(<App />);

  const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Self Introduction App</title>
        </head>
        <body>
          <div id='root'>${appHtml}</div>
          <script src='/client/client.bundle.js'></script>
        </body>
      </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
