import React, { Component } from 'react'
import Input from '@/components/Input/index.jsx'
import Button from '@/components/Button/index.jsx'
import Switch from '@/components/Switch/index.jsx'
import Select from '@/components/Select/index.jsx'

// styles
import './index.scss'

class Filters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: '',
            country: '',
            filters: this.props.filters,
            q: this.props.filters.name.value,
            promo: this.props.filters.promo.checked,
            discount: this.props.filters.discount.checked
        }
    }

    handleChange = ({ name, value }) => {
        this.update({
            [name]: value
        })
    }

    handleClear = () => {
        this.update({
            q: '',
            brand: '',
            promo: '',
            country: '',
            discount: ''
        })
    }

    update = object => {
        this.setState(object, () => {
            this.props.onFilter(object)
        })
    }

	render() {
        return (
            <section className = 'filters'>
                <div className = 'row'>
                    <div className = 'col-default-12'>
                        <Input
                            search
                            name = 'q'
                            type = 'text'
                            value = { this.state.q }
                            sendData = { this.handleChange }
                            placeholder = { this.state.filters.name.placeholder }
                        />
                    </div>
                    <div className = 'col-default-12'>
                        <Select
                            name = 'brand'
                            sendData = { this.handleChange }
                            selectedId = { this.state.brand }
                            options = { this.state.filters.brand.options }
                            placeholder = { this.state.filters.brand.placeholder }
                        />
                    </div>
                    <div className = 'col-default-12'>
                        <Select
                            name = 'country'
                            sendData = { this.handleChange }
                            selectedId = { this.state.country }
                            options = { this.state.filters.country.options }
                            placeholder = { this.state.filters.country.placeholder }
                        />
                    </div>
                    <div className = 'col-default-12'>
                        <div className = 'filters__item filters__item--row'>
                            <Switch
                                type = 'checkbox'
                                name = 'promo'
                                checked = { this.state.promo }
                                sendData = { this.handleChange }
                            />
                            <span className = 'filters__caption'>Promo offer</span>
                        </div>
                    </div>
                    <div className = 'col-default-12'>
                        <div className = 'filters__item filters__item--row'>
                            <Switch
                                type = 'checkbox'
                                name = 'discount'
                                sendData = { this.handleChange }
                                checked = { this.state.discount }
                            />
                            <span className = 'filters__caption'>Discount</span>
                        </div>
                    </div>
                    <div className = 'col-default-12'>
                        <Button
                            text = 'Clear'
                            onClick = { this.handleClear }
                            addClass = 'button--full-width button--clear'
                        />
                    </div>
                </div>
            </section>
        )
	}
}

export default Filters
