import React, { Component } from 'react'
import Link from '@/components/Link/index.jsx'

// styles
import './index.scss'

class Footer extends Component {

	render() {
		return (
            <footer className = 'footer'>
                <Link
                    link = '/'
                    class = 'footer__link'
                />
            </footer>
        )
	}
}

export default Footer
