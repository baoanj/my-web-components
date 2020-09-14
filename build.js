const fs = require('fs')

const genComp = require('./genComp')
const genView = require('./genView')

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

fs.writeFile('./dist/index.js', genComp(), () => {})

const view = fs.readFileSync('./view.json')
const path = Object.keys(JSON.parse(view))
path.forEach(item => {
  if (item === '/') return
  fs.writeFile(`./dist${item}`, genView(item), () => {})
})
