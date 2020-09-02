import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Footer extends Component {

    template() {
        return (
            <footer className = 'footer'>
                <Link
                    link = '/'
                    class = 'footer__link'
                />
            </footer>
        )
    }

	render() {
		return this.template()
	}
}

export default Footer
