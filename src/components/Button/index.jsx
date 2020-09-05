import React, { Component } from 'react'

// styles
import './index.scss'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text || '',
            tag: this.props.tag || 'button'
        }
    }

    buildButtonCLass = () => {
        let className = 'button'

        if (this.props.disabled) {
            className += ' is-disabled'
        }

        if (this.props.addClass) {
            className += ` ${this.props.addClass}`
        }

        return className
    }

    render() {
        const TagName = this.state.tag

        return (
            <TagName
                onClick = { this.props.onClick }
                className = { this.buildButtonCLass() }
            >
                { this.props.children }
                { this.state.text &&
                    <span>{ this.props.text }</span>
                }
            </TagName>
        )
    }
}

export default Button
