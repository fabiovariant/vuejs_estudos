<template>
  <div>
    <div slot="header">
      <strong>Aéroporto</strong>
    </div>
    <b-row>
      <b-col sm="4">
        <b-form-group>
          <label for="sg_airport">Sigla</label>
          <b-form-input id="sg_airport" v-model.trim="sgAirport" type="text" 
            placeholder="MIA" maxlength="3"
            v-bind:class="[hasSgAirportErr ? 'form-control is-invalid' : '']"
            :disabled="isAlt"/>
        </b-form-group>
        <b-tooltip ref="tooltip" target="sg_airport" disabled>
          Ops, parece que já existe um aéroporto com essa sigla.
        </b-tooltip>
      </b-col>
      <b-col sm="8">
        <b-form-group>
          <label for="nm_airport">Aéroporto</label>
          <b-form-input v-model.trim="nmAirport" type="text" id="nm_airport" placeholder="Miami Airport"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-form-group>
      <label for="country">País</label>
      <b-form-select id="country" v-model="country" :options="countries" class="mb-3">
        <template slot="first">
          <option :value="null" selected>Selecione uma opção</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-form-group>
      <label for="state">Estado</label>
      <b-form-select id="state" v-model="state" :options="states" :disabled="selectedAirport.country == null"
          class="mb-3" >
        <template slot="first">
          <option :value="null" selected>Selecione uma opção</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-form-group>
      <label for="city">Cidade</label>
      <b-form-select id="city" v-model="city" :options="cities" :disabled="selectedAirport.state == null" class="mb-3">
        <template slot="first">
          <option :value="null" selected>Selecione uma opção</option>
        </template>      
      </b-form-select>
    </b-form-group>
    <b-row>
      <b-col sm="4">
        <b-form-group>
          <label for="tx_boarding">Vl. Taxa Embarque</label>
          <b-form-input id="tx_boarding" type="text" v-model="txBoarding" placeholder="13"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="8">
        <b-form-group>
          <label for="cad">Cadastramento</label>
          <b-form-input id="cad" type="text" v-model="cad" placeholder="AA1239"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="8">
        <b-form-group>
          <b-form-checkbox-group id="is_blocked" name="isBlock" :plain="true">
            <b-form-checkbox :plain="true" value="0" v-model="isBlocked">Bloqueado</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>
    <div slot="footer">
      <b-button size="sm" variant="success" @click="save"><i class="fa fa-dot-circle-o"></i> Salvar</b-button>
      <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Cancelar</b-button>
    </div>    
  </div>
</template>

<script>
import axios from 'axios'
import calls from './airport_calls'

export default {
  name: 'airport-details',
  abstract: true,
  data() {
    return {
      hasSgAirportErr: false,
      tpOper: "",
      isAlt: false,

      sgAirport: null,
      nmAirport: null,
      country: null,
      state: null,
      city: null,
      txBoarding: null,
      cad: null,
      isBlocked: null,
      
      countries: [],
      states: [],
      cities: [],

      selectedAirport: {
        sg_Airport: null,
        name: null,
        country: null,
        state: null,
        city: null,
        tx_Boarding: null,
        cad: null,
        is_Blocked: null,
      }
    }
  },
  methods: {
    save: function () {
      return this.$parent.$emit('save', this.selectedAirport)
    },
    getStates: function (cdCountry) {
      calls.getStatesByCountry(cdCountry)
      .then(response => {
        this.states = response.data.state
      }).catch(e => {
        console.log('Error getting states by country' + e)
      })
    },
    getCities: function (cdCountry, cdState) {
      call.getCitiesByState(cdCountry, cdState)
      .then(response => {
        this.cities = response.data.state[0].cities
      }).catch(e => {
        console.log('Error getting cities by State' + e)
      })
    }
  },
  watch: {
    country: function (newValue, oldValue) {
      this.getStates(newValue)
      this.selectedAirport.country = newValue
    },
    state: function (newValue, oldValue) {
      this.getCities(this.country, newValue)
      this.selectedAirport.state = newValue
    },
    nmAirport: function (newValue, oldValue) {
      this.selectedAirport.name = newValue
    },
    city: function (newValue, oldValue) {
      this.selectedAirport.city = newValue
    },
    txBoarding: function (newValue, oldValue) {
      this.selectedAirport.tx_boarding = newValue
    },
    cad: function (newValue, oldValue) {
      this.selectedAirport.cad = newValue
    },
    isBlocked: function (newValue, oldValue) {
      this.selectedAirport.is_blocked = newValue
    },
  },
  beforeMount() {
    calls.getCountriesList()
    .then(response => {
      this.countries = response.data
    }).catch(e => {
      console.log('Error getting contries list: ' + e.response)
    })
  },
  mounted() {
    this.tpOper = 'Alteração'
    if (this.selectedAirport.country != null || 
        this.selectedAirport.country != undefined) {
      this.getStates(this.selectedAirport.country)
    }
    if (this.selectedAirport.state != null || 
        this.selectedAirport.state != undefined) {
      this.getCities(this.selectedAirport.country, this.selectedAirport.state)
    }
  }
}
</script>