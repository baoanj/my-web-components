
      window.customElements.define('page-layout', class Component extends HTMLElement {
        constructor() {
          super()
          const elm = document.createElement('template')
          elm.innerHTML = `<div class="page">
  <div class="header">
    <page-header></page-header>
  </div>
  <div class="main"><slot></slot></div>
  <div class="footer">
    <page-footer></page-footer>
  </div>
</div>

<style>
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .header {
    flex-shrink: 0;
  }
  .main {
    flex: 1;
    overflow: auto;
  }
  .footer {
    flex-shrink: 0;
  }
</style>
`
          const shadow = this.attachShadow({ mode: 'open' })
          shadow.appendChild(elm.content)
          
        }
      })
    
      window.customElements.define('page-header', class Component extends HTMLElement {
        constructor() {
          super()
          const elm = document.createElement('template')
          elm.innerHTML = `<div class="header">
  <span class="logo">LOGO</span>
  <span class="menu">
    <a href="/index.html">首页</a> |
    <a href="/about.html">关于</a> |
    <a href="/more.html">更多</a>
  </span>
</div>



<style>
  .header {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
  }
  .menu {
    margin-left: 20vw;
  }
</style>
`
          const shadow = this.attachShadow({ mode: 'open' })
          shadow.appendChild(elm.content)
          
  shadow.querySelector('.logo').addEventListener('click', () => {
    alert('LOGO')
  })

        }
      })
    
      window.customElements.define('page-footer', class Component extends HTMLElement {
        constructor() {
          super()
          const elm = document.createElement('template')
          elm.innerHTML = `<div class="footer">
  <span>Copyright &copy; 2020 版权所有</span>
</div>

<style>
  .footer {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 14px;
    background-color: #eee;
  }
</style>
`
          const shadow = this.attachShadow({ mode: 'open' })
          shadow.appendChild(elm.content)
          
        }
      })
    
      window.customElements.define('page-dialog', class Component extends HTMLElement {
        constructor() {
          super()
          const elm = document.createElement('template')
          elm.innerHTML = `<button id="open">打开对话框</button>
<div id="dialog">
  <div id="wrapper">
    <div id="header">
      <span id="title"></span><span id="close">×</span>
    </div>
    <div id="content"><slot></slot></div>
  </div>
</div>



<style>
  #dialog {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  #wrapper {
    width: 60%;
    margin: 100px auto;
    background-color: #fff;
    border-radius: 8px;
  }
  #header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    font-weight: bold;
  }
  #close {
    float: right;
    cursor: pointer;
  }
  #content {
    padding: 20px;
  }
</style>
`
          const shadow = this.attachShadow({ mode: 'open' })
          shadow.appendChild(elm.content)
          
  shadow.querySelector('#open').onclick = () => {
    shadow.querySelector('#dialog').style.display = 'block'
  }
  shadow.querySelector('#close').onclick = () => {
    shadow.querySelector('#dialog').style.display = 'none'
  }
  shadow.querySelector('#title').textContent = this.getAttribute('titl')

        }
      })
    