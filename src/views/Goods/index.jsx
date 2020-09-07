import React, { Component } from 'react'
import Card from '@/components/Card/index.jsx'
import List from '@/components/List/index.jsx'
import Filters from '@/components/Filters/index.jsx'
import NotFound from '@/components/NotFound/index.jsx'
import ToggleView from '@/components/ToggleView/index.jsx'

import queryString from '@/utils/queryString'
import { fetch as fetchPolyfill } from 'whatwg-fetch'

const qs = require('query-string')

class Goods extends Component {
    constructor(props) {
        super(props)
        this.params = {
            q: '',
            brand: '',
            promo: '',
            country: '',
            discount: ''
        }
        this.state = {
            items: [],
            loaded: false,
            itemsInRow: 2,
            filters: this.props.filters,
            url: 'http://localhost:3000/goods'
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        let searchParams = qs.stringify(this.clearEmptyParams())
        let searchRequest = `${this.state.url}?${searchParams}`

        fetch(searchRequest)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response
                } else {
                    let error = new Error(response.statusText)
                    error.response = response
                    throw error
                }
            })
            .then(response => response.json())
            .then(data => {
                queryString(this.params)
                this.setState({
                    loaded: true,
                    items: data
                })
            }).catch(error => {
                console.log(error)
            })
    }

    clearEmptyParams = () => {
        let params = Object.assign({}, this.params)

        for (let key in params) {
            if (params[key] === '' || params[key] === false) delete params[key]
        }

        return params
    }

    handleChange = params => {
        for (let key in params) {
            this.params[key] = params[key]
        }
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
