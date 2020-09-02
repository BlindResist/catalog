import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Card extends Component {

    template() {
        const data = this.props.data

        return (
            <div className = 'card'>
                <div className = 'card__image'>
                    <img
                        alt = { data.name }
                        src = { data.image }
                    />
                </div>
                <div className = 'card__body'>
                    <Link
                        addClass = 'card__caption'
                        link = { data.link }
                        title = { data.name }
                    >{ data.name }</Link>
                    <p className = 'card__desc'>{ data.desc }</p>
                    <div className = 'card__price'>
                        <span className = 'card__price-value'>{ data.price.value }</span>
                        <span className = 'card__price-currency'>{ data.price.currency }</span>
                    </div>
                </div>
            </div>
        )
    }

	render() {
		return this.template()
	}
}

export default Card
