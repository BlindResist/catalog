import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Header extends Component {

    render() {
        return (
            <header className = 'header'>
                <Link
                    link = '/'
                    class = 'header__logo'
                    title = { this.props.data.caption }
                />
            </header>
        )
    }
}

export default Header
