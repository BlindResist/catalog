import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class NavigationMain extends Component {

    render() {
        const items = this.props.items.map(item => {
            return (
                <li
                    key = { item.id }
                    className = 'navigation__item'
                >
                    <Link
                        link = { item.link }
                        name = { item.name }
                        title = { item.title }
                        class = 'navigation__link'
                    />
                </li>
            )
        })

        return (
            <nav className = 'navigation'>
                <ul className = 'navigation__list'>{ items }</ul>
            </nav>
        )
    }
}

export default NavigationMain
