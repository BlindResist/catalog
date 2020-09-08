import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Sorting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSort: '',
            sortDirection: 'asc',
            types: this.props.types
        }
    }

    handleClick = (event, value) => {
        this.setState({
            currentSort: value,
            sortDirection: (this.state.sortDirection === 'asc') ? 'desc' : 'asc'
        })
        this.props.onSort({
            sort: value,
            order: this.state.sortDirection
        })
        this.toggleClass(event.target)
    }

    toggleClass = element => {
        for (let key in this.refs) {
            if (this.refs[key] == element) {
                if (element.classList.contains('asc')) {
                    element.classList.add('desc')
                    element.classList.remove('asc')
                } else {
                    element.classList.add('asc')
                    element.classList.remove('desc')
                }
            } else {
                this.refs[key].classList.remove('asc', 'desc')
            }
        }
    }

    types = () => {
        return this.state.types.map((item, index) => {
            return (
                <span
                    key = { index }
                    ref = { item.value }
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
