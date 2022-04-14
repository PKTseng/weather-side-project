import request from '../request';

const api = {
  // 一般天氣預報
  getWeather(params) {
    return request({
      url: '/v1/rest/datastore/F-C0032-001',
      method: 'get',
      params,
    });
  },
};

export default api;
