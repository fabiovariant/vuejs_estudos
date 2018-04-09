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
              <b-col sm="8">
                <b-form-group>
                  <label for="nm_airport">Aéroporto</label>
                  <b-form-input type="text" id="nm_airport" placeholder="Miami Airport"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="sg_airport">Sigla</label>
                  <b-form-input type="text" id="sg_airport" placeholder="MIA"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group>
              <label for="country">País</label>
              <b-form-input type="text" id="country" placeholder="Estados Unidos"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="state">Estado</label>
              <b-form-input type="text" id="state" placeholder="Flórida"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="city">Cidade</label>
              <b-form-input type="text" id="city" placeholder="Miami"></b-form-input>
            </b-form-group>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="tx_boarding">Vl. Taxa Embarque</label>
                  <b-form-input type="text" id="tx_boarding" placeholder="13"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="8">
                <b-form-group>
                  <label for="cadastramento">Cadastramento</label>
                  <b-form-input type="text" id="cadastramento" placeholder="AA1239"></b-form-input>
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
                <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Salvar</b-button>
                <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Cancelar</b-button>
              </div>
          </b-card>
        </b-container>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'cadAeroporto',
  data () {
    return {
      showCollapse: true,
      tp_oper: "Cadastro"
    }
  }
}
</script>
