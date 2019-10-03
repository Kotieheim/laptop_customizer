import React, {Component} from 'react'
import './Summary.css'


class Summary extends Component {
    render () {
        return(
            Object.keys(this.props.selected).map(key => {
                return(
                    <div className="summary__option" key={key}>
                        <div className="summary__option_label">{key}</div>
                        <div className="summary_option__value">{this.props.selected[key].name}</div>
                        <div className="summary__option__cost">
                            { new Intl.NumberFormat('en-US', { 
                                style: 'currency',
                                currency: 'USD'}).format(this.props.selected[key].cost)}
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Summary