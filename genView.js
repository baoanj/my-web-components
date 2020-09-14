const fs = require('fs')

module.exports = function genView(pathname) {
  const view = fs.readFileSync('./view.json')
  const data = fs
    .readFileSync(JSON.parse(view)[pathname] || './src/views/404.html')
    .toString()
  const style =
    data.indexOf('</style>') > 0
      ? data.slice(data.indexOf('<style>'), data.indexOf('</style>') + 8)
      : ''
  const content = data.replace(/<style>[\s\S]*<\/style>/, '')

  return `
    <!DOCTYPE html>
    <html lang="zh-cn">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Web Components</title>
      <style>
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      </style>
      ${style}
    </head>
    <body>
      ${content}
      <script src="./index.js"></script>
    </body>
    </html>
  `
}
