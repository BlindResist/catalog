import React, { Component } from 'react'

// styles
import './index.scss'

class Select extends Component {
    state = {
        opened: false,
        selected: this.props.selected || ''
    }

    toggleDropdown = () => {
        this.setState({
            opened: !this.state.opened
        })
    }

    closeDropdown = () => {
        this.setState({
            opened: false
        })
    }

    selectOption = option => () => {
        this.closeDropdown()
        this.setState({
            selected: option
        })
    }

    clearSelected = event => {
        event.stopPropagation()

        this.closeDropdown()
        this.setState({
            selected: ''
        })
    }

    result() {
        if (this.state.selected.length) {
            return <span className = 'select__selected'>{ this.state.selected }</span>
        } else {
            return <span className = 'select__placeholder'>{ this.props.placeholder }</span>
        }
    }

    template() {
        const options = this.props.options.map(option => {
            return (
                <li
                    key = { option.id }
                    className = 'select__option'
                    onClick = { this.selectOption(option.name) }
                >{ option.name }</li>
            )
        })

        return (
            <div className = {
                'select' + (this.state.opened ? ' is-opened' : '')
            }>
                <div
                    className = 'select__container'
                    onClick = { this.toggleDropdown }
                >
                    { this.result() }
                    { this.state.selected.length > 0 &&
                        <span
                            className = 'select__clear'
                            onClick = { this.clearSelected }
                        ></span>
                    }
                    <span className = 'select__arrow'></span>
                </div>
                { this.state.opened &&
                    <div className = 'select__dropdown'>
                        <ul className = 'select__options'>
                            { options }
                        </ul>
                    </div>
                }
            </div>
        )
    }

    render() {
        return this.template()
    }
}

export default Select
