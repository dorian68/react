import React, { Component } from 'react'

import './WeatherCard.css'

class WeatherCard extends Component {

    // THIS COMPONENT TAKES A 'data' object as "props"

    /*
        DATA FORMAT SENT BY THE API :

        {
            "pixabayPicture": string, //CUSTOM ADD VIA PIXABAY API CALL
            "location": {
                "name": string,
                "region": string,
                "country": string,
                "lat": number,
                "lon": number,
                "tz_id": string,
                "localtime_epoch": number,
                "localtime": string
            },
            "current": {
                "temp_c": number,
                "is_day": boolean,
                "condition": {
                    "text": string,
                    "icon": string
                },
                "wind_kph": number
            }
        }

live
        {
 "success":true,
  "terms":"https:\/\/currencylayer.com\/terms",
  "privacy":"https:\/\/currencylayer.com\/privacy",
  "timestamp":1488982874,
  "source":"USD",
  "quotes":{
    "USDAUD":1.327043,
    "USDEUR":0.9472,
    "USDGBP":0.821801,
    "USDPLN":4.086801
  }
}

error
{
  "success": false,
  "error": {
    "code": 104,
    "info": "Your monthly usage limit has been reached. Please upgrade your subscription plan."    
  }
}



object.keys(quotes)
['USDEUR','USDAUD',....].map(item=> return {name:item,value:quotes[item]})
puis un autre map 
qui return <quotes nom {{USD} value={0,332}>

    */


    render() {

        const weather = this.props.data
        const other = this.props.apa
        //let tmp = ( Object.keys( weather.quotes ) ).filter( function getRandom() {

        // });
        let tmp = ( Object.keys( weather.quotes ) )
        let tmp2 = tmp.map( item => { return { name: item, value: weather.quotes[ item ] }.name });
        let w = tmp2.map( item => {
            return <table class="striped" nom="tableau" >
                <thead>
                    <tr>
                        { item }
                    </tr>
                </thead>
                <tbody>
                    <td>{ weather.quotes[ item ] }</td>
                </tbody>
            </table>
        });
        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image weather-img-container">
                    <span className="card-title" style={ { fontSize: 36 } }>
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="weather-data">
                            <p>
                                <span>{ w }</span>
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