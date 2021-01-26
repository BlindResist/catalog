import React, { Component } from 'react'
import Card from '@/components/Card/index.jsx'
import List from '@/components/List/index.jsx'
import Sorting from '@/components/Sorting/index.jsx'
import Filters from '@/components/Filters/index.jsx'
import NotFound from '@/components/NotFound/index.jsx'
import ToggleView from '@/components/ToggleView/index.jsx'

import request from '@/utils/request'
import queryString from '@/utils/queryString'
import clearEmptyParams from '@/utils/clearEmptyParams'

const qs = require('query-string')

class Goods extends Component {
    constructor(props) {
        super(props)
        this.params = {
            q: '',
            brand: '',
            promo: '',
            country: '',
            discount: '',
            _sort: '',
            _order: ''
        }
        this.state = {
            items: [],
            loaded: false,
            itemsInRow: 2,
            url: this.props.url,
            sorting: this.props.sorting,
            filters: this.props.filters
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        let searchParams = qs.stringify(clearEmptyParams(this.params))
        let searchRequest = `${this.state.url}?${searchParams}`

        request(searchRequest, this.params, data => {
            queryString(this.params)
            this.setState({
                loaded: true,
                items: data
            })
        })
    }

    handleChange = params => {
        for (let key in params) {
            this.params[key] = params[key]
        }
        this.getData()
    }

    handleSort = ({sort, order}) => {
        this.params._sort = sort
        this.params._order = order
        this.getData()
    }

    changeView = value => {
        this.setState({
            itemsInRow: value
        })
    }

    listItems = () => {
        return this.state.items.map(item => {
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
                            <div className = 'col-default-6'>
                                <ToggleView sendData = { this.changeView }/>
                            </div>
                            <div className = 'col-default-6'>
                                <Sorting
                                    onSort = { this.handleSort }
                                    types = { this.state.sorting }
                                />
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
