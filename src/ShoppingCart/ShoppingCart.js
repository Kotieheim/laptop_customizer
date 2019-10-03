import React, {Component} from 'react'
import Summary from '../Summary/Summary'
import Total from '../Total/Total'
import './ShoppingCart.css'

class ShoppingCart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h3>Your cart</h3>
                <Summary selected={this.props.selected} />
                <Total selected={this.props.selected} />
            </section>
        )
    }
}

export default ShoppingCart