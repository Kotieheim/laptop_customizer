import React, {Component} from 'react';
import './FeatureOption.css'


class FeatureOption extends Component {
    render() {
        return (
            <li className="feature__item">
                <div
                className={this.props.featureClass}
                onClick={e => this.props.onSelect(this.props.featureName, this.props.item)}>
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.item.cost) })
                </div>
            </li>
        )
    }
}

export default FeatureOption