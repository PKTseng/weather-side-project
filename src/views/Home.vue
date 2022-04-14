<template>
  <div class="flex flex-col justify-center items-center w-full">
    <h1 class="text-2xl text-gray-500">{{ datasetDescription }}</h1>

    <div class="Observe__container">
      <select @change="selectWeather" v-model="city">
        <option :disabled="true" value="">請選擇縣市</option>
        <option v-for="(item, index) in locationNameList" :key="index">
          {{ item.locationName }}
        </option>
      </select>

      <div class="Observe__container--weatherTitle">該縣市天氣</div>
      <div
        v-for="(item, index) in cityWeatherInfo"
        :key="index"
        class="cityWeatherInfo"
      >
        <div>開始時間：{{ item.startTime }}</div>
        <div>結束時間：{{ item.endTime }}</div>
        <div class="weatherStatus">
          天氣狀況：{{ item.parameter.parameterName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Observe',
  data() {
    return {
      city: '',
      locationList: [],
      locationNameList: [],
      weatherElementList: [],
      cityWeatherInfo: [],
      datasetDescription: '',
    };
  },
  methods: {
    getWeatherList() {
      const query = {
        Authorization: 'CWB-7B9E0D1E-8FED-45AF-B79A-AFB4BBEE5704',
      };
      this.$api.forecast.getWeather(query).then((res) => {
        const { records, success } = res;
        if (success === 'true') {
          this.datasetDescription = records.datasetDescription;
          this.locationList = records.location;

          this.locationNameList = records.location.map((i) => ({
            locationName: i.locationName,
          }));
        }
      });
    },

    selectWeather() {
      const locationInfo = this.locationList.filter(
        (i) => i.locationName === this.city,
      );

      this.cityWeatherInfo = locationInfo[0]?.weatherElement[0]?.time;

      // console.log(JSON.parse(JSON.stringify(this.cityWeatherInfo)));
    },
  },

  mounted() {
    this.getWeatherList();
  },
};
</script>

<style lang='scss' scoped>
.Observe {
  margin: 0 auto;
  &__container {
    // margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    select {
      margin: 16px 0;
      text-align: center;
      font-size: 24px;
      border-radius: 50px;
      padding: 8px 16px;
    }

    &--weatherTitle {
      font-size: 36px;
      margin-bottom: 16px;
    }
    .cityWeatherInfo {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .weatherStatus {
        color: #e74c3c;
      }
    }
  }
}
</style>
