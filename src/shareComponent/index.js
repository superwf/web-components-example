import fetch from './fetch'

class ShareComponent extends HTMLElement {
  constructor(...args) {
    super(...args)
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['sku']
  }

  connectedCallback() {
    const sku = this.getAttribute('sku')
    this.shadowRoot.innerHTML = `
    <style>button { color: blue; }</style>
    <button>点击获取sku: ${sku}商品</button>`
    const button = this.shadowRoot.querySelector('button')
    const fetchSku = () => {
      button.disabled = true
      button.innerHTML = '数据获取中...'
      fetch(sku).then(name => {
        this.shadowRoot.innerHTML = `<span>通过sku获取商品名称为: ${name}</span>`
      })
      button.removeEventListener('click', fetchSku)
    }
    button.addEventListener('click', fetchSku)
  }

  // disconnectedCallback() {}
}

export default ShareComponent
