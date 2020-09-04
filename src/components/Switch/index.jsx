import React, { Component } from 'react'

// styles
import './index.scss'

class Switch extends Component {
    state = {
        name: '',
        checked: this.props.checked || false
    }

    toggleSwitch = event => {
        let dataObject = {
            name: this.props.name,
            checked: event.target.checked
        }

        this.setState(dataObject)
        this.props.sendData(dataObject)
    }

    render() {
        return (
            <label
                htmlFor = { this.props.name }
                className = { 'switch' + (this.state.checked ? ' is-checked' : '') }
            >
                <input
                    id = { this.props.name }
                    name = { this.props.name }
                    type = { this.props.type }
                    onChange = { this.toggleSwitch }
                    checked = { this.state.checked }
                />
                <span className = 'switch__trigger'></span>
            </label>
        )
    }
}

export default Switch
