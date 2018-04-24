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
  return axios.get(callURL, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    crossDomain: true
  })
}

export default {
  getAirportByInitials,
  getCountriesList,
  getStatesByCountry,
  getCitiesByState
}
