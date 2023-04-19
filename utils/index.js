// 获取验证码
export function isValidPhoneNumber(phone) {
  var reg = /^[1][3-9][0-9]{9}$/;
  return reg.test(phone);
}
