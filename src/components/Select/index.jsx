import React, { Component } from 'react'

// styles
import './index.scss'

class Select extends Component {
    constructor(props) {
        super(props)
        this.select = React.createRef()
        this.state = {
            opened: false,
            value: this.props.selected || ''
        }
    }

    componentDidMount() {
        document.addEventListener('click', event => this.clickOutside(event))
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
        this.update(option)
    }

    clearSelected = event => {
        event.stopPropagation()

        this.closeDropdown()
        this.update()
    }

    clickOutside = event => {
        let condition = this.state.opened && !this.select.current.contains(event.target)

        if (condition) this.closeDropdown()
    }

    update = (value = '') => {
        this.props.sendData({
            value: value,
            name: this.props.name
        })
        this.setState({
            value: value
        })
    }

    result() {
        if (this.state.value.length) {
            return <span className = 'select__selected'>{ this.state.value }</span>
        } else {
            return <span className = 'select__placeholder'>{ this.props.placeholder }</span>
        }
    }

    render() {
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
            <div
                ref = { this.select }
                name = { this.props.name }
                className = {
                    'select' + (this.state.opened ? ' is-opened' : '')
                }
            >
                <div
                    className = 'select__container'
                    onClick = { this.toggleDropdown }
                >
                    { this.result() }
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
                        <ul className = 'select__options'>
                            { options }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default Select
