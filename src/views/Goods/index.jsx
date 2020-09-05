import React, { Component } from 'react'
import Card from '@/components/Card/index.jsx'
import List from '@/components/List/index.jsx'
import Filters from '@/components/Filters/index.jsx'
import NotFound from '@/components/NotFound/index.jsx'
import ToggleView from '@/components/ToggleView/index.jsx'

class Goods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            brand: '',
            promo: '',
            country: '',
            promo: false,
            itemsInRow: 2,
            discount: false,
            items: this.props.data.items,
            filters: this.props.data.filters
        }
    }

    handleChange = params => {
        this.setState({ ...params })
    }

    changeView = value => {
        this.setState({
            itemsInRow: value
        })
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

        if (this.state.country !== '') {
            filtered = filtered.filter(item => item.country === this.state.country)
        }

        if (this.state.promo !== false) {
            filtered = filtered.filter(item => item.promo === this.state.promo)
        }

        if (this.state.discount !== false) {
            filtered = filtered.filter(item => item.discount === this.state.discount)
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
            <div className = 'goods-list'>

                <div className = 'row'>
                    <div className = 'col-default-8'>
                        <div className = 'row'>
                            <div className = 'col-default-12'>
                                <ToggleView sendData = { this.changeView }/>
                            </div>
                        </div>
                        {
                            this.listItems().length < 1 &&
                            <NotFound />
                        }
                        {
                            this.listItems().length > 0 &&
                            <List itemsInRow = { this.state.itemsInRow }>
                                { this.listItems() }
                            </List>
                        }
                    </div>
                    <div className = 'col-default-4'>
                        <Filters
                            filters = { this.state.filters }
                            onFilter = { this.handleChange }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Goods
