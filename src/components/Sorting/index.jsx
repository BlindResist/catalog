import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Sorting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            direction: 'asc',
            types: this.props.types
        }
    }

    handleClick = (event, value) => {
        this.toggleClass(event.target)
        this.toggleDirection()
        this.props.onSort({
            sort: value,
            order: this.state.direction
        })
    }

    toggleClass = element => {
        if (element.classList.contains('asc')) {
            element.classList.add('desc')
            element.classList.remove('asc')
        } else {
            element.classList.add('asc')
            element.classList.remove('desc')
        }
    }

    toggleDirection = () => {
        this.setState({
            direction: (this.state.direction === 'asc') ? 'desc' : 'asc'
        })
    }

    types = () => {
        return this.state.types.map((item, index) => {
            return (
                <span
                    key = { index }
                    className = 'sorting__button'
                    onClick = { (event => this.handleClick(event, item.value)) }
                >{ item.name }</span>
            )
        })
    }

    render() {
        return (
            <div className = 'sorting'>
                <span className = 'sorting__caption'>Sort by:</span>
                { this.types() }
            </div>
        )
    }
}

export default Sorting
