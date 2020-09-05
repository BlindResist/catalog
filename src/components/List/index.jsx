import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemsInRow: this.props.itemsInRow || 1
        }
    }

    componentDidUpdate = prevProps => {
        if (this.props.itemsInRow !== prevProps.itemsInRow) {
            this.setState({ itemsInRow: this.props.itemsInRow })
        }
    }

    buildColClass() {
        let itemsInRow = parseInt(this.state.itemsInRow)
        let colWidth = (itemsInRow === 5 || itemsInRow > 6) ? 6 : 12/itemsInRow

        return `col-default-${colWidth}`
    }

	render() {
		const items = this.props.children.map(item => {
            return (
                <div
                    key = { item.key }
                    className = { this.buildColClass() }
                >{ item }</div>
            )
        })

        return (
            <section className = 'list'>
                <div className = 'row'>{ items }</div>
            </section>
        )
	}
}

export default List
