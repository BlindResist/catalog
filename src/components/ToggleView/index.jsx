import React, { Component } from 'react'
import Button from '@/components/Button/index.jsx'

// styles
import './index.scss'

class ToggleView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listView: false
        }
    }

    handleClick = state => () => {
        this.setState({
            listView: state
        }, () => {
            this.props.sendData(state ? 1 : 2)
        })
    }

    render() {

        return (
            <div className = 'toggle-view'>
                <Button
                    text = '&#9783;'
                    onClick = { this.handleClick(false) }
                    addClass = {
                        'button--toggle' + (!this.state.listView ? ' is-active' : '')
                    }
                />
                <Button
                    text = '&#9776;'
                    onClick = { this.handleClick(true) }
                    addClass = {
                        'button--toggle' + (this.state.listView ? ' is-active' : '')
                    }
                />
            </div>
        )
    }
}

export default ToggleView
