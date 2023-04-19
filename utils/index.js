// 获取验证码
export function isValidPhoneNumber(phone) {
  var reg = /^[1][3-9][0-9]{9}$/;
  return reg.test(phone);
}

// 手机号中间4位隐藏
export function geTel(tel) {
  var reg = /^(\d{3})\d{4}(\d{4})$/;
  return tel.replace(reg, "$1****$2");
}
