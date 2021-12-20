import request from '../requires';

// export function getList(params){
//   return request({
//     url:'/v1/rest/datastore/F-C0032-001',
//     method:'get',
//     params
//   })
// }


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