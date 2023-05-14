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

export function getOtpFromServer(username, password) {
  var formData = new FormData();
  formData.append("action", "getOtp");
  formData.append("username", username);
  formData.append("password", password);
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data;
  });
}

export function getLoginFromServer(username, password, otp) {
  var formData = new FormData();
  formData.append("action", "login");
  formData.append("username", username);
  formData.append("password", password);
  formData.append("otp", otp);
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data;
  });
}

export function getAdminDashData(username, token, mode, extradata = null) {
  var formData = new FormData();
  formData.append("action", "dashboard");
  formData.append("username", username);
  formData.append("token", token);
  formData.append("mode", mode);
  if (extradata) {
    var keys = Object.keys(extradata);
    for (var i = 0; i < keys.length; i++) {
      formData.append(keys[i], extradata[keys[i]]);
    }
  }
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data;
  });
}

export function setAdminDashData(username, token, mode, data) {
  var formData = new FormData();
  formData.append("action", "dashboard");
  formData.append("username", username);
  formData.append("token", token);
  formData.append("mode", mode);
  formData.append("data", JSON.stringify(data));
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data;
  });
}

export function uploadImage(imagefile) {
  var filename = imagefile.name;
  var formData = new FormData();
  formData.append("action", "uploadImage");
  formData.append("filename", filename);
  formData.append("image", imagefile);
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data.data.image;
  });
}
export function uploadPdf(imagefile) {
  var filename = imagefile.name;
  var formData = new FormData();
  formData.append("action", "uploadPdf");
  formData.append("filename", filename);
  formData.append("pdf", imagefile);
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data.data.pdf;
  });
}

export function uploadVideo(videofile) {
  var filename = videofile.name;
  var formData = new FormData();
  formData.append("action", "uploadVideo");
  formData.append("filename", filename);
  formData.append("video", videofile);
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data.data.video;
  });
}

export function deleteOffer(username, token, id) {
  var formData = new FormData();
  formData.append("action", "dashboard");
  formData.append("mode", "deleteOffer");
  formData.append("username", username);
  formData.append("token", token);
  formData.append("id", id);
  return axios.post(apiUrl(), formData).then((data) => {
    console.log(data);
    return data.data;
  });
}

export function stringContains(string, substring) {
  return string.indexOf(substring) > -1;
}
