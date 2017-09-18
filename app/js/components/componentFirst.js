angular.module('myApp')
    .component('componentFirst', {
      controller:
        class Validacion {
          static valida($event){
            console.log('metodo estatico');
            console.log(this.span1 +'|'+ this.span2 +'|'+ this.span3)
            console.log($event)
            if(this.span1 == false && this.span2 == false && this.span3 == false){
              this.boton = false;
            }else{
              this.boton = true;
            }
          }
            constructor(){
              this.login;
              this.email;
              this.password;
              this.check;
              // this.acepta = false;
              this.user ={};
              this.boton = true;
              this.span1= false;
              this.span2 = false;
              this.span3 = false;

            }

            validarEm($event){
              // console.log($event.target.value);
              let correo = $event.target.value;
              if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo)) || correo==""){
                this.span1 = true;
              }else{
                this.span1= false;
              }

              Validacion.valida($event);
            }

            validarPass($event){
              let contrasena= $event.target.value;
              if(contrasena == "" || contrasena.length < 8){
                this.span2 = true;
              }else{
                this.span2= true;
              }
              Validacion.valida();
            }

            validarCheck($event){
              console.log($event.target.checked)
              console.log('entro')

              let acepta = $event.target.checked;
              if(acepta == true){
                this.span3 = false;
              }else{
                this.span3=true;
              }
                Validacion.valida();
            }


            enviar(){
              alert('Form submitted with' + JSON.stringify(this.data))
            }
        },
      template:` <div class="container">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                          <form name="login" nonValidate>
                            <div class="form-group">
                              <label for="email">Email address</label>
                              <input type="email" class="form-control" name="email" placeholder="Email" ng-blur="$ctrl.validarEm($event)" required>
                              <span ng-show="$ctrl.span1">El correo es requerido</span>
                            </div>
                            <div class="form-group">
                              <label for="password">Password</label>
                              <input type="password" class="form-control" name="password" placeholder="Password" ng-blur="$ctrl.validarPass($event)" required>
                              <span ng-show="$ctrl.span2">El password es requerido, debe tener 8 caracteres como mínimo</span>
                            </div>
                            <div class="checkbox">
                              <label>
                                <input type="checkbox" name="check"  ng-click="$ctrl.validarCheck($event)"> Acepta los términos y condiciones.
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
