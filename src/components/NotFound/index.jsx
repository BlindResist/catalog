import React, { Component } from 'react'

// styles
import './index.scss'

class NotFound extends Component {

    render() {
        return (
            <div className = 'not-found'>
                <h3 className = 'not-found__title'>Nothing found :(</h3>
                <p className = 'not-found__text'>Please change your search request.</p>
            </div>
        )
    }
}

export default NotFound
