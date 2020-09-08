import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addClass: this.props.addClass || ''
        }
    }

	render() {
		const data = this.props.data

        return (
            <div className = { 'card' + this.state.addClass }>
                <div className = 'card__image'>
                    <img
                        alt = { data.name }
                        src = { data.image }
                    />
                    {
                        data.discount &&
                        <div className = 'card__discount'>
                            <span>{ data.discountSize }%</span>
                        </div>
                    }
                </div>
                <div className = 'card__body'>
                    <Link
                        link = { data.link }
                        title = { data.name }
                        addClass = 'card__caption'
                    >{ data.name }</Link>
                    <p className = 'card__desc'>{ data.desc }</p>
                    {
                        data.countryName &&
                        <p className = 'card__desc'>Country: { data.countryName }</p>
                    }
                </div>
                <div className = { 'card__rating card__rating--' + data.rating }></div>
                <div className = 'card__price'>
                    <span>Price:</span>
                    <span className = 'card__price-value'>
                        { parseInt(data.priceValue).toLocaleString() }
                    </span>
                    <span className = {
                        'card__price-value card__price-value--' + data.priceCurrency
                    }></span>
                </div>
            </div>
        )
	}
}

export default Card
