<template>
  <div>
    <b-form>
      <!--
        Cadastro ou alteração de novo aéroporto.
      -->
      <div role="tablist">
        <b-container fluid>
          <b-card>
            <AirportDetails/>
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
import axios from 'axios'
import calls from './airport_calls'
import AirportDetails from './AirportDetails'

export default {
  name: 'cadAeroporto',
  components: {
    AirportDetails
  },
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
      ],
      selectedAirport: {}
    }
  },
  methods: {
    save: function() {
      console.log('Oie:')
    },
    getStates: function(cdCountry){
      calls.getStatesByCountry(cdCountry)
      .then(response => {
        this.states = response.data.states
      }).catch(e => {
        console.log(e.response)
      })
    }
  },
  watch: {
    'selectedAirport.sg_airport' (newVal) {
      if(!this.isAlt && newVal.length >= 3) {
        this.hasSgAirportErr = true
        this.$refs.tooltip.$emit('enable')
        this.$refs.tooltip.$emit('open')
      } else {
        this.hasSgAirportErr = false
        this.$refs.tooltip.$emit('disable')
        this.$refs.tooltip.$emit('close')
      }
    },
   country: function (newValue, oldValue) {
     console.log(newValue)
     this.getStates(newValue)
     this.selectedAirport.country = newValue
   },
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
  },
  mounted() {
    if (this.selectedAirport.country != null || 
        this.selectedAirport.country != undefined) {
      this.getStates(this.selectedAirport.country)
    }
  }
}
</script>