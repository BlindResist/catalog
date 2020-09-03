import React, { Component } from 'react'

// styles
import './index.scss'

class Input extends Component {
    state = {
        value: this.props.value || ''
    }

    onChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    clearValue = event => {
        event.stopPropagation()

        this.setState({
            value: ''
        })
    }

    render() {

        return (
            <label
                htmlFor = { this.props.name }
                className = {
                    'input' + (this.state.value.length > 0 ? ' is-filled' : '')
                }
            >
                <input
                    maxLength = '255'
                    autoComplete = 'off'
                    id = { this.props.name }
                    name = { this.props.name }
                    type = { this.props.type }
                    value = { this.state.value }
                    onChange = { this.onChange }
                />
                { this.state.value.length < 1 &&
                    <span className = 'input__placeholder'>{ this.props.placeholder }</span>
                }
                { this.state.value.length > 0 &&
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
