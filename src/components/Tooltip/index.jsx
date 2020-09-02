import React, { Component } from 'react'

// styles
import './index.scss'

class Tooltip extends Component {

    template() {
        return (
            <span className = 'tooltip'>
                <span className = 'tooltip__text'>
                    { this.props.children }
                </span>
                <span className = 'tooltip__popup'>
                    { this.props.text }
                </span>
            </span>
        )
    }

    render() {
        return this.template()
    }
}

export default Tooltip
