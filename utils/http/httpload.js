import Request from "@/uni_modules/uview-ui/libs/luch-request/index.js";
import { BASE_API } from "./url.js";
const http = new Request({
  baseURL: BASE_API, //设置请求的base url
  timeout: 300000, //超时时长5分钟,
  header: {
    "Content-Type": "application/json;charset=UTF-8;",
  },
});

//请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.resolve(error);
  }
);
export default http;
