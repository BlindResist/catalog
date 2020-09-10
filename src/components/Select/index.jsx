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
            selectedName: '',
            options: this.props.options,
            selectedId: this.props.selectedId || '',
            placeholder: this.props.placeholder || 'Choose option'
        }
    }

    componentDidMount = () => {
        this.setSelectedOption()
        document.addEventListener('click', event => this.clickOutside(event))
    }

    componentDidUpdate = prevProps => {
        if (this.props.selectedId === prevProps.selectedId) return
        if (this.props.selectedId.length < 1) this.setState({ selectedName: '' })
        this.toggleOptions(this.props.selectedId)
        this.setState({
            selectedId: this.props.selectedId
        })
    }

    buildOptionClass = option => {
        let className = 'select__option'

        if (option.selected === true) {
            className += ' is-selected'
        } else if (option.disabled) {
            className += ' is-disabled'
        }

        return className
    }

    toggleDropdown = () => {
        this.setState({ opened: !this.state.opened })
    }

    closeDropdown = state => {
        this.setState({ opened: false })
    }

    clickOutside = event => {
        let condition = this.state.opened && !this.select.current.contains(event.target)

        if (condition) this.closeDropdown()
    }

    setSelectedOption = () => {
        let options = this.state.options

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected === this.state.selectedId) {
                this.setState({
                    selectedId: options[i].id,
                    selectedName: options[i].name
                })
            }
        }
    }

    toggleOptions = id => {
        let options = this.state.options

        for (let i = 0; i < options.length; i++) {
            if (options[i].id === id) {
                options[i].selected = true
            } else {
                options[i].selected = false
            }
        }

        return options
    }

    selectOption = data => () => {
        this.closeDropdown()
        this.update({
            selectedId: data.id,
            selectedName: data.name,
            options: this.toggleOptions(data.id)
        })
    }

    clearSelected = event => {
        event.stopPropagation()
        this.closeDropdown()
        this.update({
            selectedId: '',
            selectedName: '',
            options: this.toggleOptions('')
        })
    }

    update = object => {
        this.setState(object, () => {
            this.props.sendData({
                name: this.state.name,
                value: object.selectedId
            })
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
                        this.state.selectedName.length > 0 &&
                        <span className = 'select__selected'>{ this.state.selectedName }</span>
                    }
                    {
                        this.state.selectedName.length < 1 &&
                        <span className = 'select__placeholder'>{ this.state.placeholder }</span>
                    }
                    {
                        this.state.selectedName.length > 0 &&
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
