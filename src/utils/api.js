import * as request from 'request-promise'
/* liste des devises  http://fxtop.com/fr/liste-pays-devises.php */

/* FREE JSON API EXAMPLE */

/* WEATHER: https://www.apixu.com/api-explorer.aspx */

/* IMAGES: https://pixabay.com/api/docs/ */

export const ENDPOINTS = {

    /*   WEATHER_API_URL: 'http://api.apixu.com/v1/current.json?key=3c7dd079c0d045eda82132140172402q=paris',
       PIXABAY_API_URL: 'https://pixabay.com/api/'
   */
    live: 'http://apilayer.net/api/live',
    historical: 'http://apilayer.net/api/historical'

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}