import request from '../requires';


const api  = {
  getList(params) {
    return request({
      url: '/v1/rest/datastore/F-C0032-001',
      method: 'get',
      params,
    });
  }
}

export default api