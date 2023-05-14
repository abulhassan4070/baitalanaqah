import axios from "axios";
import { apiUrl } from "./constants";

export function getNewContactFromServer(
  contactName,
  emailId,
  subject,
  message
) {
  var formData = new FormData();
  formData.append("action", "contactForm");
  formData.append("contactName", contactName);
  formData.append("emailId", emailId);
  formData.append("subject", subject);
  formData.append("message", message);
  return axios
    .post(apiUrl() + "contactForm", formData)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
}

export function getLogoutAPI(username, type) {
  // authorization
  var headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  return axios
    .post(apiUrl() + "logOut", {}, { headers: headers })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
}

export function getOtpFromServer(username, type) {
  var jsonValue = {
    option: type,
    value: username,
  };
  return axios
    .post(apiUrl() + "login", jsonValue)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
}

export function getOtpFromForRegisterServer(email, phone, firstname) {
  var jsonValue = {
    fullName: firstname,
    email: email,
    mobile: phone,
  };
  return axios
    .post(apiUrl() + "register", jsonValue)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
}
export function getLoginFromServer(username, otp) {
  var jsonValue = {
    value: username,
    otp: otp,
  };
  return axios
    .post(apiUrl() + "otpVerify", jsonValue)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
}

export function getRegisterFromServer(username, otp) {
  var jsonValue = {
    value: username,
    otp: otp,
  };
  return axios
    .post(apiUrl() + "registerOtpVerify", jsonValue)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
}
