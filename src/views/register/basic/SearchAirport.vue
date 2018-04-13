<template>
  <div>
    <b-form>
      <div role="tablist">        
        <b-card>
          <b-row sm="10">
            <b-col sm="3" id="wrapper">
              <b-form-select id="tp_seach" v-model="selectedSearch" :options="searchBy" class="mb-3" />
            </b-col>
            <b-col sm="6" id="wrapper">
              <b-form-input type="text" id="tx_search" placeholder="Digite sua busca" class="mb-3" />
            </b-col>
            <b-col sm="2" id="wrapper">
              <b-button id="searchBtn" type="submit" size="lg" variant="success" class="mb-3">
                <i class="fa fa-search"></i> Buscar
              </b-button>
            </b-col>
          </b-row>
          <b-row sm="10">
            <b-table 
                id="listTable"
                ref="listTable"
                striped 
                hover 
                style="cursor: pointer;"
                :items="items"
                :fields="fields"
                v-model="shownItems"
                @row-clicked="rowClickSelector"
              >
            </b-table>
          </b-row>
          <div slot="footer">
            <router-link :to="{path: 'airport/new'}" style="color: white">
              <b-button type="reset" size="sm" variant="primary">
                  <i class="fa fa-plus-circle"></i> Cadastrar novo
              </b-button>
            </router-link>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Limpar</b-button>
          </div>
        </b-card>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedSearch: null,
      shownItems: null,
      fields: [ 
        {key: 'sg_airport', label: 'Sigla'},
        {key: 'name', label: 'Nome'}, 
        {key: 'country', label: 'País'}
      ],
      items: [
        { sg_airport: 'SDU', name: 'International airport of Rio', country: 'Brazil' },
        { sg_airport: 'CGH', name: 'International airport of SP', country: 'Brazil' },
        { sg_airport: 'MIA', name: 'International airport of Miami', country: 'EUA' }
      ],
      searchBy: [
        { value: null, text: 'Selecione um tipo de busca' },        
        { value: 'SG', text: 'Por sigla' },
        { value: 'NM', text: 'Por nome' }
      ]
    }
  },
  methods: {
    rowClickSelector(record, index, object) {
      let sg_airport = record.sg_airport
      this.$router.push({ path: `/register/basic/airport/${sg_airport}` })
    }
  }
}
</script>

<style>
  #wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
