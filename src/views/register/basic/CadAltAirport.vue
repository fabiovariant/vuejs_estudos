<template>
  <div>
    <b-form>
      <!--
        Cadastro ou alteração de novo aéroporto.
      -->
      <div role="tablist">
        <b-container fluid>
          <b-card>
            <div slot="header">
              <strong>{{tp_oper}}</strong> <small>Aéroporto</small>
            </div>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="sg_airport">Sigla</label>
                  <b-form-input v-model.trim="selectedAirport.sg_airport" type="text" 
                    id="sg_airport" placeholder="MIA" maxlength="3"
                    v-bind:class="[has_sg_airport_err ? 'form-control is-invalid' : '']"
                    :disabled="is_alt"></b-form-input>
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
              <b-form-select id="country" v-model="selectedAirport.country" :options="countries" class="mb-3" />
            </b-form-group>
            <b-form-group>
              <label for="state">Estado</label>
              <b-form-select id="state" v-model="selectedAirport.state" :options="states" :disabled="selectedAirport.country == null"
                  class="mb-3" />
            </b-form-group>
            <b-form-group>
              <label for="city">Cidade</label>
              <b-form-select id="city" v-model="selectedAirport.city" :options="cities" :disabled="selectedAirport.state == null" class="mb-3" />
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
                  <b-form-input id="cad" type="text" v-model="selectedAirport.Cad" placeholder="AA1239"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="8">
                <b-form-group>
                  <b-form-checkbox-group id="is_blocked" name="isBlock" :plain="true">
                    <b-form-checkbox :plain="true" value="0">Bloqueado</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
            </b-row>
              <div slot="footer">
                <b-button size="sm" variant="success" @click="save"><i class="fa fa-dot-circle-o"></i> Salvar</b-button>
                <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Cancelar</b-button>
              </div>
          </b-card>
        </b-container>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'cadAeroporto',
  data() {
    return {
      is_alt: false,
      has_sg_airport_err: false,
      tp_oper: "Cadastro",
      countries: [
        { value: undefined, text: 'Selecione o país do Aeroporto', },
        { value: 'EUA', text: 'Estados Unidos da America' },
        { value: 'BRA', text: 'Brasil' },
        { value: 'ARG', text: 'Argentina' }
      ],
      states: [
        { value: undefined, text: 'Selecione o estado do Aeroporto', },
        { value: 'SP', text: 'São Paulo' },
        { value: 'RJ', text: 'Rio' },
        { value: 'RS', text: 'Rio Grande' }
      ],
      cities: [
        { value: undefined, text: 'Selecione a cidade do Aeroporto', },
        { value: 'SAO', text: 'São Paulo' },
        { value: 'GRU', text: 'Guarulhos' }
      ],
      airports: [
        { sg_airport: 'SDU', name: 'International airport of Rio', country: 'BRA', 
          city: 'SAO', state: 'SP'},
        { sg_airport: 'CGH', name: 'International airport of SP', country: 'BRA', 
          city: 'SAO', state: 'SP' },
        { sg_airport: 'MIA', name: 'International airport of Miami', country: 'EUA', 
          city: 'SAO', state: 'SP' }
      ],
      selectedAirport: {}
    }
  },
  methods: {
    save: function() {
      console.log(this.selectedAirport.sg_airport)
    }
  },
  watch: {
    'selectedAirport.sg_airport'(newVal){
      if(!this.is_alt && newVal.length >= 3 && 
          this.airports.filter(e => e.sg_airport == newVal).length > 0) {
        this.has_sg_airport_err = true
        this.$refs.tooltip.$emit('enable')
        this.$refs.tooltip.$emit('open')
      } else {
        this.has_sg_airport_err = false
        this.$refs.tooltip.$emit('disable')
        this.$refs.tooltip.$emit('close')
      }
    },
  },
  beforeMount() {
    let sgAirport = this.$route.params.sg_airport
    if (sgAirport != undefined || sgAirport != null) {
      let url = `http://localhost:8076/airport/name/` + sgAirport
      this.is_alt = true
      axios.get(url, {
	      headers: {
	        'Access-Control-Allow-Origin': '*',
	      },
        crossDomain: true
	    }).then(response => {
        // JSON responses are automatically parsed.
        this.selectedAirport = response.data
      }).catch(e => {
        console.log(e.response)
      })
    }
  }
}
</script>