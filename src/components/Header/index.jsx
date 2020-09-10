import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: this.props.data.link,
            target: this.props.data.target,
            caption: this.props.data.caption
        }
    }

    render() {
        return (
            <header className = 'header'>
                <Link
                    class = 'header__logo'
                    link = { this.state.link }
                    title = { this.state.caption }
                    target = { this.state.target }
                />
            </header>
        )
    }
}

export default Header
