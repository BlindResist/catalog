import React, { Component } from 'react'
import Input from '@/components/Input/index.jsx'
import Select from '@/components/Select/index.jsx'

// styles
import './index.scss'

class Filters extends Component {
    state = {}

    handleChange = data => {
        this.setState({
            [data.name]: data.value
        })
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
                            sendData = { this.handleChange }
                            placeholder = { filters.name.placeholder }
                        />
                    </div>
                    <div className = 'col-default-12'>
                        <Select
                            name = 'brand'
                            sendData = { this.handleChange }
                            options = { filters.brand.options }
                            placeholder = { filters.brand.placeholder }
                        />
                    </div>
                </div>
            </section>
        )
	}
}

export default Filters
