import React, { Component } from 'react'
import Card from '@/components/Card/index.jsx'
import List from '@/components/List/index.jsx'
import Filters from '@/components/Filters/index.jsx'

class Goods extends Component {
    state = {
        name: '',
        brand: '',
        promo: '',
        items: this.props.data.items,
        filters: this.props.data.filters
    }

    handleChange = params => {
        this.setState({ ...params })
    }

    filteredItems = () => {
        let filtered

        if (this.state.brand === '') {
            filtered = this.state.items
        } else {
            filtered = this.state.items.filter(item => item.brand === this.state.brand)
        }

        if (this.state.name !== '') {
            filtered = filtered.filter(item => {
                if (this.state.name.length > 0 && item.name.toLowerCase().includes(this.state.name.toLowerCase())) {
                    return item
                }
            })
        }

        return filtered
    }

    listItems = () => {
        return this.filteredItems().map(item => {
            return (
                <Card
                    data = { item }
                    key = { item.id }
                />
            )
        })
    }

    render() {
        return (
            <div className = 'goods-list row'>
                <div className = 'col-default-8'>
                    <List itemsInRow = '2'>
                        { this.listItems() }
                    </List>
                </div>
                <div className = 'col-default-4'>
                    <Filters
                        data = { this.state.filters }
                        onFilter = { this.handleChange }
                    />
                </div>
            </div>
        )
    }
}

export default Goods
