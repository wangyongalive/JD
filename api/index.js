import request from "@/utils/http/httpload.js";

export const sendSms = (params) => {
  return request.get("/api/send_sms", {
    params,
  });
};

export const login = (params) => {
  return request.get("/api/login", {
    params,
  });
};
