import React, { Component } from 'react'
import Header from '@/components/Header/index.jsx'
import Footer from '@/components/Footer/index.jsx'
import NavigationMain from '@/components/NavigationMain/index.jsx'

// styles
import './index.scss'

class Aside extends Component {

    render() {
        return (
            <aside className = 'aside'>
                <Header
                    data = { this.props.header }
                />
                {/*<NavigationMain
                    items = { this.props.navigation }
                />*/}
                {/*<Footer
                    data = { this.props.footer }
                />*/}
            </aside>
        )
    }
}

export default Aside
