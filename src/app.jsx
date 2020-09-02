import React, { Component } from 'react'
import data from './data.js'

import Goods from '@/views/Goods/index.jsx'
import Aside from '@/components/Aside/index.jsx'

export default class App extends Component {
    state = {
        data
    }

    render() {
        return (
            <>
                <Aside
                    header = { data.components.header }
                    footer = { data.components.footer }
                    navigation = { data.components.navigationMain }
                />
                <main
                    role = 'main'
                    className = 'main'
                >
                    <div className = 'content'>
                        <Goods data = { data.components.goods } />
                    </div>
                </main>
            </>
        )
    }
}
