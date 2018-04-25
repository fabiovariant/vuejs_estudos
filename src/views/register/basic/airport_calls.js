import axios from 'axios'
import constants from '../../constants'

// Defines a base API URL to call.
const API_URL = constants.API_BASE_URL + ':' + constants.API_BASE_PORT

function getAirportByInitials (sgAirport) {
  let callURL = API_URL + '/airport/name/' + sgAirport
  return axios.get(callURL, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    crossDomain: true
  })
}

function getCountriesList () {
  let callURL = API_URL + '/register/countries'
  return axios.get(callURL, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    crossDomain: true
  })
}

function getStatesByCountry (cdCountry) {
  let callURL = API_URL + '/register/countries/states/' + cdCountry
  return axios.get(callURL, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    crossDomain: true
  })
}

function getCitiesByState (cdCountry, cdState) {
  let callURL = API_URL + '/register/countries/states/' + cdCountry + '/' + cdState
  console.log()
  return axios.get(callURL, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    crossDomain: true
  })
}

function postAirport (airport) {
  let callURL = API_URL + '/airport'
  return axios.post(callURL, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    crossDomain: true,
    body: airport
  })
}

export default {
  getAirportByInitials,
  getCountriesList,
  getStatesByCountry,
  getCitiesByState,
  postAirport
}
