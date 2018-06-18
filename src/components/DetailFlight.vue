<template>
  <div class="search">
    <header>
      <router-link to="/Flight">
        <span><i class="arrow left icon"></i> &nbsp;&nbsp; Search</span>
      </router-link>
    </header>
<br><br>
<div class="ui stackable one column centered cards" v-for="item in list" :key="item.index">
  <a class="ui card">
    <div class="content">
      <img class="right floated centered mini ui circular image" src="static/img/icons/flight.png">
      <div class="header">
        {{item.outbound.airline}}
      </div>
      <div class="meta">
        {{item.outbound.takeOffTime.hourOfDay+':'+ item.outbound.takeOffTime.minute + 
        '->' + item.outbound.landingTime.hourOfDay+':'+ item.outbound.takeOffTime.minute}}
      </div>
      <div class="description">
        {{'Price: £'+ item.outbound.price }}
      </div>
    </div>
  </a>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'search',
  data () {
    return {
      msg: 'Hello world',
      list: []
    }
  },
  async created () {
    try {
      let response = await axios.get('https://phiyawat-comsci.herokuapp.com/list')
      this.list = response.data
    } catch (e) {
      console.log('Error: ' + e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
