angular.module('myApp')
    .component('componentFirst', {
      controller:
        class {
          constructor(){
            // this.regexMax = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$';
            this.newstyle;
            this.boton = true;
            this.check;
            this.login;
            this.user={};
          }

          analize(pass){
            // debugger;
            if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/.test(pass))){
              console.log('no es muy segura!!!')
              this.newstyle = {'border':'1px solid red'};
            }else{
              this.newstyle = {'border':'1px solid green'};
            }

          }

          validar(){

            console.log(this.login.$error.required);

              if(this.login.$error.required === undefined){
                console.log('desbloquea boton')
                this.boton = false;
              }else{
                this.boton = true;
              }
          }

          enviar(){
            alert('Form submitted with' + JSON.stringify(this.user))
          }
        },

      template:` <div class="container">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                          <form name="$ctrl.login" nonValidate>
                            <div class="form-group">
                              <label for="email">Email address</label>
                              <input type="email" class="form-control" name="email" placeholder="nombre@dominio" ng-focus="$ctrl.validar()" ng-model="$ctrl.user.email" ng-model-options="{ updateOn: 'blur' }" required>
                              <span ng-show="$ctrl.login.$submitted || $ctrl.login.email.$touched">
                                <span ng-show="$ctrl.login.email.$error.required">El campo es obligatorio.</span>
                                <span ng-show="$ctrl.login.email.$error.email">Formato de email incorrecto.</span>
                              </span>
                            </div>
                            <div class="form-group" >
                              <label for="password">Password</label>
                              <input type="password" class="form-control" name="password" placeholder="Use de 8-15 caracteres, incluya mayúsculas, minúsculas, números y caracteres especiales" ng-focus="$ctrl.validar()" ng-style="$ctrl.newstyle" ng-model="$ctrl.user.password" ng-change="$ctrl.analize($ctrl.user.password)" required>
                              <span ng-show="$ctrl.login.$submitted || $ctrl.login.password.$touched">
                                <span ng-show="$ctrl.login.password.$error.required">El campo es obligatorio.</span>
                              </span>
                            </div>
                            <div class="checkbox">
                              <label>
                                <input type="checkbox" name="check" ng-model="user.check" ng-change="$ctrl.validar()" required> Acepta los términos y condiciones.
                              </label>
                                <span ng-show="$ctrl.span3">Es necesario aceptar los términos y condiciones</span>
                            </div>
                            <button type="submit" class="btn btn-success" ng-disabled="$ctrl.boton" ng-click="$ctrl.enviar()">Enviar</button>
                          </form>
                      </div>
                    </div>
                </div>`
    })

/*!$ctrl.login.$pristine && $ctrl.login.$ctrl.email.$error.required* --- no me funciona*/
