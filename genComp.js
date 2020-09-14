const fs = require('fs')

module.exports = function genComp() {
  let result = ''
  const components = fs.readFileSync('./comp.json')
  JSON.parse(components).forEach(item => {
    const data = fs.readFileSync(item.file).toString()
    const script = data.indexOf('</script>') > 0
      ? data.slice(data.indexOf('<script>') + 8, data.indexOf('</script>'))
      : ''
    const template = data.replace(/<script>[\s\S]*<\/script>/, '')

    result += `
      window.customElements.define('${item.name}', class Component extends HTMLElement {
        constructor() {
          super()
          const elm = document.createElement('template')
          elm.innerHTML = \`${template}\`
          const shadow = this.attachShadow({ mode: 'open' })
          shadow.appendChild(elm.content)
          ${script}
        }
      })
    `
  })
  return result
}
