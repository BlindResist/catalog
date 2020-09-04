import React, { Component } from 'react'

// styles
import './index.scss'

class Input extends Component {
    state = {
        name: '',
        value: this.props.value || ''
    }

    changeValue = event => {
        this.update(event.target.value)
    }

    clearValue = event => {
        event.stopPropagation()
        this.update()
    }

    update = (value = '') => {
        let dataObject = {
            value: value,
            name: this.props.name
        }

        this.setState(dataObject)
        this.props.sendData(dataObject)
    }

    render() {
        return (
            <label
                htmlFor = { this.props.name }
                className = { 'input' + (this.state.value.length > 0 ? ' is-filled' : '') }
            >
                <input
                    maxLength = '255'
                    autoComplete = 'off'
                    id = { this.props.name }
                    name = { this.props.name }
                    type = { this.props.type }
                    value = { this.state.value }
                    onChange = { this.changeValue }
                />
                {
                    this.state.value.length < 1 &&
                    <span className = 'input__placeholder'>{ this.props.placeholder }</span>
                }
                {
                    this.state.value.length > 0 &&
                    <span
                        className = 'input__clear'
                        onClick = { this.clearValue }
                    ></span>
                }
                <span className = 'input__error'>{ this.props.error }</span>
            </label>
        )
    }
}

export default Input
