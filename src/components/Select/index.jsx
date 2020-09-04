import React, { Component } from 'react'

// styles
import './index.scss'

class Select extends Component {
    constructor(props) {
        super(props)
        this.select = React.createRef()
        this.state = {
            id: '',
            name: '',
            opened: false,
            options: this.props.options,
            value: this.props.selected || ''
        }
    }

    componentDidMount = () => {
        document.addEventListener('click', event => this.clickOutside(event))
    }

    buildOptionClass = option => {
        let className = 'select__option'

        if (option.selected) {
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
        this.update(data)
    }

    clearSelected = event => {
        event.stopPropagation()
        this.closeDropdown()
        this.update({ id: '', name: '' })
    }

    clickOutside = event => {
        let condition = this.state.opened && !this.select.current.contains(event.target)

        if (condition) this.closeDropdown()
    }

    update = data => {
        let dataObject = {
            id: data.id,
            value: data.name,
            name: this.props.name
        }

        this.setState(dataObject)
        this.props.sendData(dataObject)
    }

    render() {
        const options = this.state.options.map(option => {
            return (
                <li
                    key = { option.id }
                    onClick = { this.selectOption(option) }
                    className = { this.buildOptionClass(option) }
                >{ option.name }</li>
            )
        })

        return (
            <div
                ref = { this.select }
                name = { this.props.name }
                className = { 'select' + (this.state.opened ? ' is-opened' : '') }
            >
                <div
                    className = 'select__container'
                    onClick = { this.toggleDropdown }
                >
                    {
                        this.state.value.length > 0 &&
                        <span className = 'select__selected'>{ this.state.value }</span>
                    }
                    {
                        this.state.value.length < 1 &&
                        <span className = 'select__placeholder'>{ this.props.placeholder }</span>
                    }
                    {
                        this.state.value.length > 0 &&
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
                        <ul className = 'select__options'>{ options }</ul>
                    </div>
                }
            </div>
        )
    }
}

export default Select
