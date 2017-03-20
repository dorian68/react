
import React, { Component } from 'react'

import './useMap.css'

class WeatherCard extends Component {


    render() {

        const weather = this.props.data

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image weather-img-container">
                    <span className="card-title" style={ { fontSize: 36 } }>
                        { weather.source } °C
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="weather-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ weather.quotes.USDEUR }</span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>{ weather.quotes.USDEUR }</span>
                            </p>
                            <p>
                                <table class="striped">
                                    <thead>
                                        <tr>
                                            <th data-field="name">Item Name</th>
                                            <th data-field="price">Item Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{ weather.quotes.USDEUR }</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </p>
                        </div>

                    </div>
                    <div className="card-action center-align">
                    </div>
                </div>
            </div>
        )
    }

}

export default WeatherCard