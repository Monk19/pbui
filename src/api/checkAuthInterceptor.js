import axios from "axios";
const authInterceptor = axios.create({
  baseURL: "http://localhost:3402",
});
authInterceptor.interceptors.request.use(
  function (config) {
    console.log(config);

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
authInterceptor.interceptors.response.use(
  function (config) {
    console.log(config.data);
    console.log(config.headers["Authorization"]);
    if (!config.data.status) {
      localStorage.removeItem("tkn");
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default authInterceptor;
