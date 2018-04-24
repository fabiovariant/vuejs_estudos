<template>
  <div>
    <div slot="header">
      <strong>{{tpOper}}</strong> <small>Aéroporto</small>
    </div>
    <b-row>
      <b-col sm="4">
        <b-form-group>
          <label for="sg_airport">Sigla</label>
          <b-form-input v-model.trim="selectedAirport.sg_airport" type="text" 
            id="sg_airport" placeholder="MIA" maxlength="3"
            v-bind:class="[hasSgAirportErr ? 'form-control is-invalid' : '']"
            :disabled="isAlt"></b-form-input>
        </b-form-group>
        <b-tooltip ref="tooltip" target="sg_airport" disabled>
          Ops, parece que já existe um aéroporto com essa sigla.
        </b-tooltip>
      </b-col>
      <b-col sm="8">
        <b-form-group>
          <label for="nm_airport">Aéroporto</label>
          <b-form-input v-model.trim="selectedAirport.name" type="text" id="nm_airport" placeholder="Miami Airport"></b-form-input>
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
      <b-form-select id="state" v-model="selectedAirport.state" :options="states" :disabled="selectedAirport.country == null"
          class="mb-3" >
        <template slot="first">
          <option :value="null" selected>Selecione uma opção</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-form-group>
      <label for="city">Cidade</label>
      <b-form-select id="city" v-model="city" :options="cities" :disabled="selectedAirport.state == null" class="mb-3" />
    </b-form-group>
    <b-row>
      <b-col sm="4">
        <b-form-group>
          <label for="tx_boarding">Vl. Taxa Embarque</label>
          <b-form-input id="tx_boarding" type="text" v-model="selectedAirport.tx_boarding" placeholder="13"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="8">
        <b-form-group>
          <label for="cad">Cadastramento</label>
          <b-form-input id="cad" type="text" v-model="selectedAirport.cad" placeholder="AA1239"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="8">
        <b-form-group>
          <b-form-checkbox-group id="is_blocked" name="isBlock" :plain="true">
            <b-form-checkbox :plain="true" value="0" v-model="selectedAirport.is_blocked">Bloqueado</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>
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
      isAlt: false,
      hasSgAirportErr: false,
      tpOper: "Cadastro",
      country: null,
      
      countries: [],
      states: [],

      cities: [
        { value: undefined, text: 'Selecione a cidade do Aeroporto', },
        { value: 'SAO', text: 'São Paulo' },
        { value: 'GRU', text: 'Guarulhos' }
      ],
      selectedAirport: {}
    }
  },
  beforeMount() {
    let sgAirport = this.$route.params.sg_airport
    if (sgAirport != undefined || sgAirport != null) {
      this.isAlt = true
      calls.getAirportByInitials(sgAirport)
      .then(response => {
        this.tpOper = 'Alteração'
        this.selectedAirport = response.data
      }).catch(e => {
        console.log(e.response)
      })
    } else {
      this.selectedAirport.country = null
    }

    calls.getCountriesList()
    .then(response => {
      this.countries = response.data
    }).catch(e => {
      console.log(e.response)
    })
  }
}
</script>