/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize

const APP_TITLE = 'FETCH FOREX DATA'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE
Slider
Volet
//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import WeatherCard from './components/WeatherCard'
import useMap from './components/useMap'
import Slider from './components/slider'
import Volet from './components/volet'
class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            weather: undefined,
            finalArray: [],
            a: [],
            input: "",
            date: 1 / 1 / 2015
        }
    }



    render() {
        return (
            <div className="App">

                <div className="App-header" >
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="parallax"></div>

                <div className="App-content">

                    <div className="center-align">

                        <form onSubmit={ this.fetchWeather } >
                            <div className="col s12 m6 offset-m3">
                                <Slider />
                            </div>
                            <div className="contenu">
                                <div className="row" style={ { marginBottom: 0 } }>

                                </div>
                                <div className="row" style={ { marginBottom: 0 } }>
                                    <div className="input-field col s6 offset-s3">
                                        <input id="currencyInput" type="text" onChange={ this.handleChange } />
                                        <label htmlFor="currency">currency</label>
                                    </div>
                                    <div className="col s12 m6 offset-m3">
                                        <Volet />
                                    </div>

                                </div>
                                <button type="submit" className="waves-effect waves-light btn" onSubmit={ this.fetchWeather }  >
                                    fetch
                            </button>

                            </div>
                        </form>
                    </div>
                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayWeatherInfo() }
                        </div>
                    </div>
                    <div className="row2" style={ { marginTop: 20 } } >


                    </div>
                </div>

            </div >

        )
    }




    handleChange = ( event ) => {
        this.setState( {
            input: event.target.value
        })
        console.log( this.state.input )
    }
    handleChangeDate = ( event ) => {
        this.setState( {
            date: event.target.value
        })
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let weather = await get( ENDPOINTS.live, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                //06630f5284a2a6ee92ef763b3fc5c2a4 : forex-API
                //3c7dd079c0d045eda82132140172402 : meteo-API
                access_key: '06630f5284a2a6ee92ef763b3fc5c2a4',
                currencies: this.state.input,
            })
            let tmp = Object.keys( weather.quotes );
            let tmp2 = tmp.map( item => { return { name: item, value: weather.quotes[ item ] }.name });
            let w = tmp2.map( item => { return <quotes nom={ item } >aaa</quotes> });
            this.setState( {
                weather: weather,
                //finalArray: tmp
                finalArray: tmp2,
                a: w
            })

            //checking that we received a well-formated weather object
            if ( weather ) {
                //weather data is now received from the server thanks to async-await
                //let updatedWeatherWithImage = await this.fetchPicture( weather )
                console.log( weather )
                return (
                    <WeatherCard data={ this.state.weather } /> ,
                    <useMap apa={ this.state.tmp2 } />
                )
                /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
                /*this.setState( {
                    weather: updatedWeatherWithImage
                })*/
            }
            //handling error
            else {
                console.log( weather )
                //weather will contain an error object (see APIXU DOCUMENTATION)
                Materialize.toast( weather.quotes.USDAUD, 8000, 'error-toast' )
                //Using Materialize toast component to display error messages - see http://materializecss.com/dialogs.html
            }


        }
        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }

    //will fetch a picture with the name of the city fetched by the weather API
    //will return an updated weather object (same object + one image)

    //handle display of the received weather object
    displayWeatherInfo = () => {
        const weather = this.state.weather

        if ( weather ) {
            return (
                <WeatherCard data={ weather } />
            )
        }

        return null
    }

}

export default App
