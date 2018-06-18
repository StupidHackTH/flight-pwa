<template>
  <div class="main">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']">
      <nav id="menu">
        <div class="ui visible inverted left vertical sidebar menu">
          <br>
          <img class="ui centered tiny circular image" :src="picture">
          <h4 align="center">{{name}}</h4>
          <a class="item">
            <span class="font"><i class="star icon"></i>&nbsp;&nbsp;My favourite</span>
          </a>
          <a class="item" @click="signout">
            <span class="font"><i class="sign out alternate icon"></i>&nbsp;&nbsp;Logout</span>
          </a>
        </div>
      </nav>
      <main id="panel">
        <header>
          <span class="toggle-button"><i class="sidebar icon"></i> &nbsp;&nbsp; Flight.PWA</span>
        </header>
          <br><br>
        <div class="ui form stackable center aligned grid container">
          <div class="four wide field column">
            <label><p>Flying form</p></label>
            <input class="color" placeholder="Don Mueng" type="text">
          </div>
          <div class="four wide field column">
            <label><p>Flying to</p></label>
            <input class="color" placeholder="CDG" type="text">
          </div>
        </div>
        <div class="ui form stackable center aligned grid container">
          <div class="four wide field column">
            <label><p>Departing</p></label>
              <select class="ui fluid dropdown color">
                <option value="Don Mueng">Don Mueng</option>
                <option value="Suvannabhumi">Suvannabhumi</option>
                <option value="CDG">CDG</option>
              </select>
          </div>
          <div class="four wide field column">
            <label><p>Returning</p></label>
              <select class="ui fluid dropdown color">
                <option value="Don Mueng">Don Mueng</option>
                <option value="Suvannabhumi">Suvannabhumi</option>
                <option value="CDG">CDG</option>
              </select>
          </div>
        </div>
        <div class="ui form stackable center aligned grid container">
          <div class="four wide field column">
            <label><p>Adult</p></label>
              <select class="ui fluid dropdown color">
                <option value="AL">1</option>
                <option value="AK">2</option>
                <option value="AK">3</option>
                <option value="AK">4</option>
                <option value="AK">5</option>
              </select>
          </div>
          <div class="four wide field column">
            <label><p>Cabin</p></label>
              <select class="ui fluid dropdown color">
                <option value="AL">BUSINESS_CLASS</option>
                <option value="AL">TRAVEL_CLASS</option>
                <option value="AL">FIRST_CLASS</option>
              </select>
          </div>
        </div><br><br>
        <div class="ui form center aligned stackable grid container">
          <div class="four wide column">
            <router-link to="/detailFlight">
              <div class="ui submit button">
                <p class="button-color">Search Flight</p>
              </div>
            </router-link>
          </div>
        </div>
        <img src="static/img/icons/city.png">
      </main>
    </Slideout>
  </div>
</template>

<script>
import Slideout from 'vue-slideout'
import router from '../router'
export default {
  name: 'main',
  components: {
    Slideout
  },
  data () {
    return {
      name: [],
      picture: []
    }
  },
  mounted () {
    window.FB.api('/me?fields=name,picture.type(normal)', text => {
      // getdata in array[0] and getarrayinJSON
      this.name = `${text['name']}`
      this.picture = `${text['picture'].data['url']}`
    })
  },
  methods: {
    signout () {
      window.FB.logout(function (response, error) {
      // user is now logged out
        console.log('logout success!')
        router.push({name: 'Login'})
        if (error) {
          router.push({name: 'Login'})
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input[type=text].color, input[type=text]:focus.color, input[type=text]::after, 
.ui.dropdown.color, .ui.dropdown:focus, .ui.dropdown::after {
    background-color: #1d1f2d;
    color: #6c6c74;
}

img{
  width: 100%;
  height: auto;
}

p{
  color: #e1e2e3;
  text-align: left;
}

p.button-color{
  color: #129389;
}

.ui.button{
  background: #1d1f2d;
  border-color: #129389;
}

header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #1d1f2d;
    color: #ffffff;
}

span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  color: white;
}

span.font{
  font-size: 15px;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #13131f;
}

.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
  background-color: #1D1F20;
  color: white;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  background-color: #13131f;
  color: white;
  position: relative;
  z-index: 1;
  will-change: transform;
  min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

</style>
