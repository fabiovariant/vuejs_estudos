<template>
  <div>
    <b-form>
      <!--
        Cadastro de novo aéroporto.
      -->
      <div role="tablist">
        <b-container fluid>
          <b-card>
            <AirportDetails ref="airportDetails">
            </AirportDetails>
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
  name: 'alter-airport',
  components: {
    AirportDetails
  },
  data: function () {
    return {
      hasSgAirportErr: false
    }
  },
  methods: {
    save: function (airportToSave) {
      calls.postAirport(airportToSave)
      .then(response => {
        console.log(response)
      }).catch(e => {
        console.log('Error saving airport' + e)
      })
    }
  },
  created() {
    this.$on('save', this.save)
  }
}
</script>