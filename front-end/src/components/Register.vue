<template>
    <div id="app">

   <div class="login-page">
      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Sign Up</h1>
                  <form class="form-group">
                      <input v-model="userReg" type="text" class="form-control" placeholder="Text" required>
                     <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                     <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                     
                     <input type="submit" class="btn btn-primary" @click="doRegister">
                     <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Log in here</a>
                     </p>
                     <p><a href="#">Forgot your password?</a></p>
                  </form>
               </div>

               <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                  <h1>Log in</h1>
                  <form class="form-group">
                     <input v-model="userLogin" type="text" class="form-control" placeholder="Text" required>
                     <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                     <input type="submit" class="btn btn-primary" @click="doRegister">
                     <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                     </p>
                  </form>
               </div>
            </div>
         </div>

      </div>
   </div>

</div>
</template>
<script>
    import router from '../router'
    export  default {
        data: {
            registerActive: false,
            userLogin: "",
            passwordLogin: "",
            emailReg: "",
            passwordReg: "",
            confirmReg: "",
            emptyFields: false
        },
        
        methods: {
            doLogin() {
                if (this.userLogin === "" || this.passwordLogin === "") {
                    this.emptyFields = true;
                } else {
                    router.push("Home")
                }
            },
            
            doRegister() {
                if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
                    this.emptyFields = true;
                } else {
                    router.push("Home")
                }
            }
        }
    }
</script>
