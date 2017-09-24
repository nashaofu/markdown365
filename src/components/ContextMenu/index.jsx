import React from 'react'
import ReactDOM from 'react-dom'
import './context-menu.styl'

const ContextMenuComponent = props => {
  const ContextMenus = props.menus.map((item, index) => {
    if (typeof item === 'string') {
      item = {
        name: item,
        key: index
      }
    }
    return (
      <li
        key={item.key}
        className="context-menu-item"
        onClick={() => props.onClick(item, index)}
      >{item.name}</li>
    )
  })
  return (
    <ul
      className="context-menu"
      style={{
        top: props.y,
        left: props.x
      }}
    >
      {ContextMenus}
    </ul>
  )
}

export default class ContextMenu {
  $el = null
  constructor ({
    menus = [],
    onClick = () => { }
  }) {
    this.$el = document.createElement('div')
    this.$el.setAttribute('data-name', 'content-menu')
    this.props = {
      menus,
      onClick
    }
  }

  show (props) {
    this.props = {
      ...this.props,
      ...props
    }
    window.addEventListener('click', this.onClickOut)
    document.body.appendChild(this.$el)
    this.render()
    console.log(this)
  }

  hide () {
    document.body.removeChild(this.$el)
    window.removeEventListener('click', this.onClickOut)
  }

  onClick = menu => {
    this.props.onClick(menu)
    this.hide()
  }

  onClickOut = event => {
    if (this.$el && !this.$el.contains(event.target)) {
      this.hide()
    }
  }

  render () {
    const { menus, x, y } = this.props
    ReactDOM.render(
      <ContextMenuComponent
        menus={menus}
        x={x}
        y={y}
        onClick={this.onClick}
      />,
      this.$el
    )
  }
}
