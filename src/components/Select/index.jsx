import React, { Component } from 'react'

// styles
import './index.scss'

class Select extends Component {
    constructor(props) {
        super(props)
        this.select = React.createRef()
        this.state = {
            opened: false,
            name: this.props.name,
            options: this.props.options,
            selectedOptionId: this.props.selectedOptionId,
            selectedOptionName: this.props.selectedOptionName || '',
            placeholder: this.props.placeholder || 'Choose option'
        }
    }

    componentDidMount = () => {
        document.addEventListener('click', event => this.clickOutside(event))
    }

    componentDidUpdate = prevProps => {
        if (this.props.selectedOptionId === prevProps.selectedOptionId) return
        if (this.props.selectedOptionId.length < 1) {
            this.setState({ selectedOptionName: '' })
        }
        this.setState({ selectedOptionId: this.props.selectedOptionId })
    }

    buildOptionClass = option => {
        let className = 'select__option'

        if (option.id === this.state.selectedOptionId) {
            className += ' is-selected'
        } else if (option.disabled) {
            className += ' is-disabled'
        }

        return className
    }

    toggleDropdown = () => {
        this.setState({ opened: !this.state.opened })
    }

    closeDropdown = () => {
        this.setState({ opened: false })
    }

    selectOption = data => () => {
        this.closeDropdown()
        this.update({
            selectedOptionId: data.id,
            selectedOptionName: data.name
        })
    }

    clearSelected = event => {
        event.stopPropagation()
        this.closeDropdown()
        this.update({
            selectedOptionId: '',
            selectedOptionName: '',
        })
    }

    clickOutside = event => {
        let condition = this.state.opened && !this.select.current.contains(event.target)

        if (condition) this.closeDropdown()
    }

    update = object => {
        this.setState(object)
        this.props.sendData({
            name: this.state.name,
            value: object.selectedOptionId
        })
    }

    options = () => {
        return this.state.options.map(option => {
            return (
                <li
                    key = { option.id }
                    onClick = { this.selectOption(option) }
                    className = { this.buildOptionClass(option) }
                >{ option.name }</li>
            )
        })
    }

    render() {
        return (
            <div
                ref = { this.select }
                name = { this.state.name }
                className = { 'select' + (this.state.opened ? ' is-opened' : '') }
            >
                <div
                    className = 'select__container'
                    onClick = { this.toggleDropdown }
                >
                    {
                        this.state.selectedOptionName.length > 0 &&
                        <span className = 'select__selected'>{ this.state.selectedOptionName }</span>
                    }
                    {
                        this.state.selectedOptionName.length < 1 &&
                        <span className = 'select__placeholder'>{ this.state.placeholder }</span>
                    }
                    {
                        this.state.selectedOptionName.length > 0 &&
                        <span
                            className = 'select__clear'
                            onClick = { this.clearSelected }
                        ></span>
                    }
                    <span className = 'select__arrow'></span>
                </div>
                {
                    this.state.opened &&
                    <div className = 'select__dropdown'>
                        <ul className = 'select__options'>{ this.options() }</ul>
                    </div>
                }
            </div>
        )
    }
}

export default Select
