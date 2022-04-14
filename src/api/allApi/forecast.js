import request from '../requires';

const api = {
  // 一般天氣預報
  getWeather(params) {
    return request({
      url: '/F-C0032-001',
      method: 'get',
      params,
    });
  },
};

export default api;
