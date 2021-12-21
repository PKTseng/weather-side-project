<template>
  <div class="home">
    <button @click="nextPage">nextPage</button>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import axios from 'axios';
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    getWeatherList() {
      let query = {
        Authorization: "CWB-7B9E0D1E-8FED-45AF-B79A-AFB4BBEE5704",
      };
      this.$api.forecast.getWeather(query).then((res) => {
        console.log(res);
      });
    },
    nextPage() {
      this.$router.push({ name: "Observe" });
      // console.log('nextPage');
    },

    // 下拉選單，選縣市，選擇時間區間顯示對應內容，
    // 先選
    // 先找天氣就好
  },
  mounted() {
    this.getWeatherList();
    // let query = {
    //   Authorization: "CWB-7B9E0D1E-8FED-45AF-B79A-AFB4BBEE5704"
    // }
    // axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-7B9E0D1E-8FED-45AF-B79A-AFB4BBEE5704`).then((res) => {
    //   console.log(res);
    // })
  },
};
</script>
