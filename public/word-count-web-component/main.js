// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super()

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    // Create text node and add word count to it
    this.text = document.createElement('span')

    // Append it to the shadow root
    shadow.appendChild(this.text)

    this.countWords()
    this.observe()
  }

  countWords() {
    const text = this.parentNode.innerText || this.parentNode.textContent
    this.text.textContent = `Words: ${text.split(/\s+/g).length}`
  }

  observe() {
    const config = {
      childList: true,
      subtree: true,
      characterData: true,
    }

    const callback = (mutationsList, observer) => {
      console.log(mutationsList, observer)
      this.countWords()
    }
    this.observer = new MutationObserver(callback)
    this.observer.observe(this.parentNode, config)
  }

  disconnectedCallback() {
    this.observer.disconnect()
  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' })
