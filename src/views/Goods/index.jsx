import React, { Component } from 'react'
import Card from '@/components/Card/index.jsx'
import List from '@/components/List/index.jsx'
import Input from '@/components/Input/index.jsx'
import Select from '@/components/Select/index.jsx'
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
        const filters = this.props.data.filters

        return (
            <div className = 'goods-list row'>
                <div className = 'col-default-8'>
                    <List
                        itemsInRow = '2'
                        items = { this.props.data.items }
                    >
                        { listItems }
                    </List>
                </div>
                <div className = 'col-default-4'>
                    <Filters>
                        <div className = 'row'>
                            <div className = 'col-default-12'>
                                <Input
                                    name = 'name'
                                    type = 'text'
                                    value = { filters.name.value }
                                    placeholder = { filters.name.placeholder }
                                />
                            </div>
                            <div className = 'col-default-12'>
                                <Select
                                    options = { filters.brand.options }
                                    placeholder = { filters.brand.placeholder }
                                />
                            </div>
                        </div>
                    </Filters>
                </div>
            </div>
        )
    }

    render() {
        return this.template()
    }
}

export default Goods
