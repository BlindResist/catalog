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
        })
        this.props.sendData(state ? 1 : 2)
    }

    render() {

        return (
            <div className = 'toggle-view'>
                <Button
                    onClick = { this.handleClick(false) }
                    addClass = {
                        'button--toggle button--toggle-tile' + (!this.state.listView ? ' is-active' : '')
                    }
                />
                <Button
                    onClick = { this.handleClick(true) }
                    addClass = {
                        'button--toggle button--toggle-list' + (this.state.listView ? ' is-active' : '')
                    }
                />
            </div>
        )
    }
}

export default ToggleView
