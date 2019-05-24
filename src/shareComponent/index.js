import fetch from './fetch'

class ShareComponent extends HTMLElement {
  constructor(...args) {
    super(...args)
    const shadowRoot = this.attachShadow({ mode: 'open' })
    // mode为closed，则之后不能获取this.shadowRoot
    // mode为open，则之后可以获取this.shadowRoot
    // 所以说mode总应该被设置为open
    // console.log(this.shadowRoot)
    // console.log(this._root === this.shadowRoot)
    const sku = this.getAttribute('sku')
    const style = document.createElement('style')
    style.textContent = 'button { color: blue; }'
    const button = document.createElement('button')
    button.textContent = `点击获取sku: ${sku}商品`
    shadowRoot.appendChild(style)
    shadowRoot.appendChild(button)
    const fetchSku = () => {
      button.disabled = true
      button.innerHTML = '数据获取中...'
      fetch(sku).then(name => {
        shadowRoot.innerHTML = `<span>通过sku获取商品名称为: ${name}</span>`
      })
      button.removeEventListener('click', fetchSku)
    }
    button.addEventListener('click', fetchSku)
  }

  static get observedAttributes() {
    return ['sku']
  }

  connectedCallback() {}

  // disconnectedCallback() {}
}

export default ShareComponent
