<template>
  <div>
    <b-form>
      <!--
        Alteração de novo aéroporto.
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
      console.log(airportToSave.name)
    }
  },
  beforeMount() {
    let sgAirport = this.$route.params.sg_airport
    if (sgAirport != undefined || sgAirport != null) {
      this.isAlt = true
      calls.getAirportByInitials(sgAirport)
      .then(response => {
        AirportDetails.data().selectedAirport = response.data
      }).catch(e => {
        console.log('Error airport altData: ' + e.response)
      })
    } else {
      AirportDetails.data().selectedAirport.country = null
    }

  },
  created() {
    this.$on('save', this.save)
  }
}
</script>