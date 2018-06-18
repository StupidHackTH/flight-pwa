<template>
  <div id="login">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
         <br><br><br><br>
        <form class="ui large form">
          <div class="ui stacked inverted segment">
            <h2 class="ui teal image header">
                  <div class="content">
                     <p class="white">Log in to your account</p>
                  </div>
            </h2>
            <div class="ui fluid large submit button facebook">
              <fb-signin-button @success="onSignInSuccess" @error="onSignInError">
                <p class="white"><i class="facebook icon"></i>Sign in with Facebook</p>
              </fb-signin-button>
            </div>
               <br> -OR- <br><br>
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                  <input class="color" type="text" name="email" placeholder="Username">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input class="color" type="password" name="password" placeholder="Password">
              </div>
            </div>
            <div class="ui fluid large submit button">
              <p class="green">Login</p>
            </div>
          </div>
            <div class="ui error message"></div>
        </form>
        <div class="ui message">
          <p class="white">New to us? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'login',
  methods: {
    onSignInSuccess (response) {
      console.log('OK')
      router.push({name: 'Flight'})
    },
    onSignInError (error) {
      console.log('OH NO', error)
    }
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #13131f;
}

body > .grid {
  height: 100%;
}

.image {
  margin-top: -100px;
}

.column {
  max-width: 450px;
}

p.white{
  color: white;
}

p.green{
  color: #129389;
}

.ui.segment, .ui.message{
  background-color: #13131f;
}

.ui.button{
  background: #1d1f2d;
}

.ui.button.facebook{
  background: #4267b2;
}

input[type=text].color, input[type=text]:focus.color, input[type=text]::after,
input[type=password].color, input[type=password]:focus.color, input[type=password]::after {
    background-color: #1d1f2d;
    color: #6c6c74;
}

.user.icon, .lock.icon{
  color: white;
}

</style>