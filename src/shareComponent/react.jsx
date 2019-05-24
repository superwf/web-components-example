import { runInAction, observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import fetch from './fetch'

@observer
class ShareButton extends React.Component {
  @observable
  buttonText = ''

  @observable
  skuName = ''

  constructor(props) {
    super(props)
    runInAction(() => {
      this.buttonText = `点击获取sku: ${props.sku}商品`
    })
  }

  fetch = () => {
    runInAction(() => {
      this.buttonText = '数据获取中...'
    })
    fetch().then(skuName => {
      runInAction(() => {
        this.skuName = `通过sku获取商品名称为: ${skuName}`
      })
    })
  }

  renderContent() {
    if (this.skuName) {
      return this.skuName
    }
    return (
      <button type="button" onClick={this.fetch}>
        {this.buttonText}
      </button>
    )
  }

  render() {
    return (
      <>
        <style>
          button {'{'} color: blue; {'}'}
        </style>
        {this.renderContent()}
      </>
    )
  }
}

class ShareComponentByReact extends HTMLElement {
  constructor(...args) {
    super(...args)
    const shadowRoot = this.attachShadow({ mode: 'open' })
    const sku = this.getAttribute('sku')
    render(<ShareButton sku={sku} />, shadowRoot)
  }

  static get observedAttributes() {
    return ['sku']
  }

  connectedCallback() {}

  disconnectedCallback() {
    unmountComponentAtNode(this.shadowRoot)
  }
}

export default ShareComponentByReact
