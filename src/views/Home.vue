<template>
  <div class="home">
    <button class="btn btn-outline-primary" @click="nextPage">nextPage</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
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
        // console.log(res);
      });
    },
    nextPage() {
      this.$router.push({ name: "Observe" });
    },
  },

  mounted() {
    this.getWeatherList();
  },
};
</script>
