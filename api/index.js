import request from "@/utils/http/httpload.js";

export const textFn = (params) => {
  return request.get("/api/Chatgptdaili/get_child_by_phone", params);
};
