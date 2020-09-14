const http = require('http')
const url = require('url')
const genComp = require('./genComp')
const genView = require('./genView')

http
  .createServer(function (request, response) {
    const pathname = url.parse(request.url).pathname

    if (pathname === '/index.js') {
      response.writeHead(200, { 'Content-Type': 'text/javascript' })
      response.write(genComp())
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(genView(pathname))
    }
    response.end()
  })
  .listen(3000)

console.log('Server running at http://127.0.0.1:3000/')
