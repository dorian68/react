import React, { Component } from 'react'

import './slider.css'

const Materialize = window.Materialize
const $ = window.$

class slider extends Component {
    render() {
        return <div className="slider" ref={ div => this.sliderCtn = div }>
            <ul className="slides">
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Tour_eiffel_de_nuit.jpg" />
                    <div className="caption center-align">
                        <h3>Here is the eiffel tour</h3>
                        <h5 className="light grey-text text-lighten-3">tap "EUR" for euro.</h5>
                    </div>
                </li>
                <li>
                    <img src="http://cdn.playbuzz.com/cdn/7bda58d8-6274-49cd-8853-6458b020e398/7ceb4447-2a51-49f1-8904-7efd8c7f8c77.jpg" />
                    <div className="caption left-align">
                        <h3>Australia</h3>
                        <h5 className="light grey-text text-lighten-3">Tap "AUD" for australian dollars .</h5>
                    </div>
                </li>
                <li>
                    <img src="http://culturebox.francetvinfo.fr/sites/default/files/assets/images/2015/06/muraille.jpg" />
                    <div className="caption right-align">
                        <h3>China</h3>
                        <h5 className="light grey-text text-lighten-3">Tap "CNY" for chinses yuan.</h5>
                    </div>
                </li>
                <li>
                    <img src="http://img.ev.mu/images/attractions/1926/1605x642/5326.jpg" />
                    <div className="caption center-align">
                        <h3>Japan</h3>
                        <h5 className="light grey-text text-lighten-3">Tap "JPY" for japonese yen.</h5>
                    </div>
                </li>
            </ul>
        </div>
    }

    componentDidMount() {
        $( this.sliderCtn ).slider()
    }

}

export default slider