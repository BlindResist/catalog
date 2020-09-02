import React, { Component } from 'react'
import Card from '@/components/Card/index.jsx'
import List from '@/components/List/index.jsx'
import Filters from '@/components/Filters/index.jsx'

class Goods extends Component {

    template() {
        const listItems = this.props.data.items.map(item => {
            return (
                <Card
                    data = { item }
                    key = { item.id }
                />
            )
        })

        return (
            <div className = 'goods-list'>
                <Filters items = { this.props.data.filters } />
                <List
                    itemsInRow = '2'
                    items = { this.props.data.items }
                >
                    { listItems }
                </List>
            </div>
        )
    }

    render() {
        return this.template()
    }
}

export default Goods
