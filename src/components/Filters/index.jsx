import React, { Component } from 'react'

// styles
import './index.scss'

class Filters extends Component {

    template() {
        return (
            <section className = 'filters'>
                { this.props.children }
            </section>
        )
    }

	render() {
		return this.template()
	}
}

export default Filters
