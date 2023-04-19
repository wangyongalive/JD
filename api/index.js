import request from "@/utils/http/httpload.js";

export const sendSms = (params) => {
  return request.get("/send_sms", {
    params,
  });
};

export const login = (params) => {
  return request.get("/login", {
    params,
  });
};
