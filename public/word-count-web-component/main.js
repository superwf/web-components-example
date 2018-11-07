// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super()

    // count words in element's parent element
    const wcParent = this.parentNode

    function countWords(node) {
      const text = node.innerText || node.textContent
      return text.split(/\s+/g).length
    }

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    // Create text node and add word count to it
    const text = document.createElement('span')
    text.textContent = `Words: ${countWords(wcParent)}`

    // Append it to the shadow root
    shadow.appendChild(text)

    // Update count when element content changes
    setInterval(() => {
      const count = `Words: ${countWords(wcParent)}`
      text.textContent = count
    }, 200)
  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' })
