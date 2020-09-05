import React, { Component } from 'react'

// styles
import './index.scss'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorStatus: false,
            errorText: 'required field!',
            value: this.props.value || '',
            search: this.props.search || false,
            name: this.props.name,
            placeholder: this.props.placeholder || 'Input text'
        }
    }

    componentDidUpdate = prevProps => {
        if (this.props.value !== prevProps.value) {
            this.setState({ value: this.props.value })
        }
    }

    buildInputClass = () => {
        let className = 'input'

        if (this.props.search) {
            className += ' input--search'
        }

        if (this.state.value.length) {
            className += ' is-filled'
        }

        return className
    }

    changeValue = event => {
        this.update(event.target.value)
    }

    clearValue = event => {
        event.stopPropagation()
        this.update()
    }

    update = (value = '') => {
        this.setState({ value })
        this.props.sendData({
            value: value,
            name: this.state.name
        })
    }

    render() {
        return (
            <label
                htmlFor = { this.props.name }
                className = { this.buildInputClass() }
            >
                <input
                    maxLength = '255'
                    autoComplete = 'off'
                    id = { this.state.name }
                    type = { this.props.type }
                    name = { this.state.name }
                    value = { this.state.value }
                    onChange = { this.changeValue }
                />
                {
                    this.state.search &&
                    <span className = 'input__magnifier'></span>
                }
                {
                    this.state.value.length < 1 &&
                    <span className = 'input__placeholder'>{ this.state.placeholder }</span>
                }
                {
                    this.state.value.length > 0 &&
                    <span
                        className = 'input__clear'
                        onClick = { this.clearValue }
                    ></span>
                }
                {
                    this.state.errorStatus &&
                    <span className = 'input__error'>{ this.state.errorText }</span>
                }
            </label>
        )
    }
}

export default Input
