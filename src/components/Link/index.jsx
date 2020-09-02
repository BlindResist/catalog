import React, { Component } from 'react'

// styles
import './index.scss'

class Link extends Component {
    state = {
        link: this.props.link || '/',
        class: this.props.class || 'link',
        target: this.props.target || '_self',
        addClass: `link ${ this.props.addClass }`
    }

    className() {
        return this.props.addClass !== undefined ? this.state.addClass : this.state.class
    }

    render() {

        return (
            <a
                href = { this.state.link }
                title = { this.props.title }
                target = { this.state.target }
                className = { this.className() }
            >
                { this.props.children }
                <span>{ this.props.name }</span>
            </a>
        )
    }
}

export default Link
