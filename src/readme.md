# More example copy from [mdn](https://github.com/mdn/web-components-examples)

[composed-path](/composed-path)

[defined-pseudo-class](/defined-pseudo-class)

[edit-word](/edit-word)

[editable-list](/editable-list)

[element-details](/element-details)

[expanding-list-web-component](/expanding-list-web-component)

[host-selectors](/host-selectors)

[life-cycle-callbacks](/life-cycle-callbacks)

[popup-info-box-web-component](/popup-info-box-web-component)

[simple-template](/simple-template)

[slotchange](/slotchange)

[slotted-pseudo-element](/slotted-pseudo-element)

[word-count-web-component](/word-count-web-component)

# Webcomponents knowledge points

## attachShadow({ mode: 'open' | 'closed' })

1. open: 

之后在封装类内部可以用`this.shadowRoot`获取到shadowRoot
在外部可以获取节点后用`shadowRoot`属性获取并修改`shadowRoot`内部元素

2. closed:
之后在封装类内部`this.shadowRoot`为`null`，不能获取
因此在外部也不能通过属性获取`shadowRoot`内部的内容
如果`shadowRoot`内部的事件冒泡，在`event.composedPath()`中也不会有`shadowRoot`内部的元素路径。

3. `attributeChangeDCallback`生命周期，文档上写有3个参数`name, oldValue, newValue`，但实际调用发现有4个参数，第四个总是null。

4. css伪类

  * :host(selector) 为当前自定义，且匹配`selector`的元素添加样式。
  * :host-context(selector) 为包裹当前自定义元素，且匹配`selector`的元素添加样式。
  * ::slotted(selector) 为所有内部`slot`中，且匹配`selector`的元素添加样式。
