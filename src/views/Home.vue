<template>
  <div class="home">
    <button @click="getData">getData</button>
    <button @click="getAxiosData">getAxiosData</button>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import * as forecast from '../api/allApi/forecast';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    getData() {
      console.log('getData', this.$api);
      this.$api.get('https://randomuser.me/api/', { params: {}, headers: {} }).then((res) => {
        console.log(res);
      });
    },
    getAxiosData() {
      console.log('getAxiosData', forecast);
      forecast.getList().then((res) => {
        console.log(res);
      });
    },

  },
  mounted(){
    // console.log(process.env.VUE_APP_BASE_API);
     forecast.getList().then((res) => {
        console.log(res);
      });
  }
};
</script>
