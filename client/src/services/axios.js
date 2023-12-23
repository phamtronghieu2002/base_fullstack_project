import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bookingcare-service-api.onrender.com/api/v1',
  });

  instance.interceptors.response.use(
    function (response) {
      return response.data ? response.data : { status: response.status };
    },
    function (error) {
      let res;
      if (error.response) {
        res = {
          status: error.response.status,
          data: error.response.data,
          statusText: error.response.statusText,
          headers: error.response.headers,
          config: error.config,
        };
      }
      return Promise.reject(res || error);
    }
  );
  
export default instance
