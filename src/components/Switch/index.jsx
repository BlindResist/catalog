import React, { Component } from 'react'

// styles
import './index.scss'

class Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            checked: this.props.checked || false
        }
    }

    componentDidUpdate = prevProps => {
        if (this.props.checked !== prevProps.checked) {
            this.setState({ checked: this.props.checked })
        }
    }

    toggleSwitch = event => {
        let dataObject = {
            name: this.state.name,
            checked: event.target.checked
        }

        this.setState(dataObject)
        this.props.sendData(dataObject)
    }

    render() {
        return (
            <label
                htmlFor = { this.state.name }
                className = { 'switch' + (this.state.checked ? ' is-checked' : '') }
            >
                <input
                    id = { this.state.name }
                    name = { this.state.name }
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
