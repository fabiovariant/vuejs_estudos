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
                :items="items" 
                :fields="fields" 
                striped hover
                @select="getDataToAlter">

              </b-table>
          </b-row>
          <div slot="footer">
            <router-link :to="{path: 'airport/new'}" style="color: white">
              <b-button type="reset" size="sm" variant="primary">
                  <i class="fa fa-plus-circle"></i> Cadastrar novo
              </b-button>
            </router-link>
            <b-button type="reset" size="sm" variant="warning" style="color: white">
              <i class="fa fa-edit"></i> Alterar
            </b-button>
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
      fields: [ 'Sigla', 'Nome', 'País' ],
      items: [
        { Sigla: 'SDU', Nome: 'International airport of Rio', País: 'Brazil' },
        { Sigla: 'CGH', Nome: 'International airport of SP', País: 'Brazil' },
        { Sigla: 'MIA', Nome: 'International airport of Miami', País: 'EUA' }
      ],
      searchBy: [
        { value: null, text: 'Selecione um tipo de busca' },        
        { value: 'SG', text: 'Por sigla' },
        { value: 'NM', text: 'Por nome' }
      ]
    }
  },
  methods: {
    getDataToAlter: function(item) {
       console.log(item)
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
