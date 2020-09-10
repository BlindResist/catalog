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
        let state = event.target.checked

        this.setState({
            checked: state
        }, () => {
            this.props.sendData({
                value: state,
                name: this.state.name
            })
        })
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
