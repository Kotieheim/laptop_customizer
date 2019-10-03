import React, {Component} from 'react'
import Feature from '../Feature/Feature'
import './LaptopSpecs.css'


class LaptopSpecs extends Component {
    render() {
        const {selected} = this.props;
        const features = Object.keys(this.props.features)
        .map(key => {
            return (
                <Feature
                name={key}
                key={key}
                options={this.props.features[key]}
                selected={selected}
                onSelect={this.props.onSelect}
                />
            )
        })
        return (
            <section className="main__form">
                <h3>Customize your laptop</h3>
                {features}
            </section>
        )
    }
}

export default LaptopSpecs