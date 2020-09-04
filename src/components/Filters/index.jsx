import React, { Component } from 'react'
import Input from '@/components/Input/index.jsx'
import Switch from '@/components/Switch/index.jsx'
import Select from '@/components/Select/index.jsx'

// styles
import './index.scss'

class Filters extends Component {
    state = {}

    handleSelect = data => {
        let dataObject = {
            [data.name]: data.id
        }

        this.setState(dataObject)
        this.props.onFilter(dataObject)
    }

    handleInput = data => {
        let dataObject = {
            [data.name]: data.value
        }

        this.setState(dataObject)
        this.props.onFilter(dataObject)
    }

    handleCheckbox = data => {
        let dataObject = {
            [data.name]: data.checked
        }

        this.setState(dataObject)
        this.props.onFilter(dataObject)
    }

	render() {
		const filters = this.props.data

        return (
            <section className = 'filters'>
                <div className = 'row'>
                    <div className = 'col-default-12'>
                        <Input
                            type = 'text'
                            name = 'name'
                            value = { filters.name.value }
                            sendData = { this.handleInput }
                            placeholder = { filters.name.placeholder }
                        />
                    </div>
                    <div className = 'col-default-12'>
                        <Select
                            name = 'brand'
                            sendData = { this.handleSelect }
                            options = { filters.brand.options }
                            placeholder = { filters.brand.placeholder }
                        />
                    </div>
                    <div className = 'col-default-12'>
                        <Select
                            name = 'country'
                            sendData = { this.handleSelect }
                            options = { filters.country.options }
                            placeholder = { filters.country.placeholder }
                        />
                    </div>
                    <div className = 'col-default-12'>
                        <div className = 'filters__item filters__item--row'>
                            <Switch
                                name = 'promo'
                                type = 'checkbox'
                                sendData = { this.handleCheckbox }
                                checked = { filters.promo.checked }
                            />
                            <span className = 'filters__caption'>Promo offer</span>
                        </div>
                    </div>
                    <div className = 'col-default-12'>
                        <div className = 'filters__item filters__item--row'>
                            <Switch
                                name = 'discount'
                                type = 'checkbox'
                                sendData = { this.handleCheckbox }
                                checked = { filters.discount.checked }
                            />
                            <span className = 'filters__caption'>Discount</span>
                        </div>
                    </div>
                </div>
            </section>
        )
	}
}

export default Filters
