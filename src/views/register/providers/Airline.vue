<template>
  <div>
    <b-form>
      <div slot="header">
        <h1>Cadastro Aeroporto</h1>
      </div>
      <div role="tablist">
        
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.area1 variant="info"><strong>Dados básicos</strong></b-btn>
          </b-card-header>
          <b-collapse id="area1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              
              <b-row class="form-group">
                <b-col sm="6">
                  <b-form-group>
                    <label for="ccnumber">Sigla <small style="color: red;">obrigatório</small></label>
                    <b-form-input type="text" id="airlineInitials" placeholder="GRU"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="12">
                  <b-form-group>
                    <label for="ccnumber">IATA <small style="color: red;">obrigatório</small></label>
                    <b-form-input type="text" id="iata" placeholder="MIA"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="12">
                  <b-form-group>
                    <label for="ccnumber">IATA <small style="color: red;">obrigatório</small></label>
                    <b-form-input type="text" id="iata" placeholder="MIA"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.area2 variant="info"><strong>Dados Extras</strong></b-btn>
          </b-card-header>
          <b-collapse id="area2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              
              <b-row class="form-group">
                <b-col sm="12">
                  <b-form-group>
                    <label for="ccnumber">Campo Extra 1</label>
                    <b-form-input type="text" id="extra1" placeholder="Miami Airport"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="12">
                  <b-form-group>
                    <label for="ccnumber">Campo Extra 2</label>
                    <b-form-input type="text" id="extra2" placeholder="MIA"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>              
              
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.area3 variant="info"><strong>Dados de Contato</strong></b-btn>
          </b-card-header>
          <b-collapse id="area3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-row class="form-group">
                <b-col sm="12">
                  <b-form-group>
                    <label for="ccnumber">Campo Contato 1</label>
                    <b-form-input type="text" id="contato1" placeholder="Miami Airport"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="form-group">
                <b-col sm="12">
                  <b-form-group>
                    <label for="ccnumber">Campo Contato 2</label>
                    <b-form-input type="text" id="contato2" placeholder="MIA"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>       
            </b-card-body>
          </b-collapse>
        </b-card>

      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'cadAeroporto',
  data () {
    return {
      showCollapse: true
    }
  }
}
</script>
