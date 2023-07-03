import axios from 'axios';
import { apiUrl } from './constants';

export function getOtpFromServer(username, type) {
  var jsonValue = {
    option: type,
    value: username,
  };
  return axios
    .post(apiUrl() + 'login', jsonValue)
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
}
export function getLogoutAPI(username, type) {
  // authorization
  var headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };
  return axios
    .post(apiUrl() + 'logOut', {}, { headers: headers })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
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
    .post(apiUrl() + 'otpVerify', jsonValue)
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log(err.response);
      return err;
    });
}

export function uploadImage(imagefile) {
  // authorization
  var headers = {
    Authorization: localStorage.getItem('token'),
    'Content-Type': 'multipart/form-data',
  };
  console.log(imagefile);
  var formData = new FormData();
  formData.append('files[]', imagefile);

  return axios
    .post(apiUrl() + 'uploadProductImages', formData, { headers: headers })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
}
export function uploadPdf(imagefile) {
  var filename = imagefile.name;
  var formData = new FormData();
  formData.append('action', 'uploadPdf');
  formData.append('filename', filename);
  formData.append('pdf', imagefile);
  return axios.post(apiUrl(), formData).then(data => {
    console.log(data);
    return data.data.data.pdf;
  });
}

export function uploadVideo(videofile) {
  var filename = videofile.name;
  var formData = new FormData();
  formData.append('action', 'uploadVideo');
  formData.append('filename', filename);
  formData.append('video', videofile);
  return axios.post(apiUrl(), formData).then(data => {
    console.log(data);
    return data.data.data.video;
  });
}

export function deleteOffer(username, token, id) {
  var formData = new FormData();
  formData.append('action', 'dashboard');
  formData.append('mode', 'deleteOffer');
  formData.append('username', username);
  formData.append('token', token);
  formData.append('id', id);
  return axios.post(apiUrl(), formData).then(data => {
    console.log(data);
    return data.data;
  });
}

export function urlEncode(data) {
  var str = [];
  for (var p in data)
    if (data.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
    }
  return str.join('&');
}

export async function sendRequestWithToken(data, url, method) {
  var headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  if (method.toLowerCase() === 'post') {
    var formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    formData.append('token', localStorage.getItem('token'));
    var res = await axios.request({
      url: url,
      method: 'post',
      headers: headers,
      data: formData,
    });
    return res;
  } else {
    var res2 = await axios.request({
      url: url,
      method: 'get',
      headers: headers,
    });
    return res2;
  }
}

export function simpleToaster(message, type, toast) {
  toast({
    title: message,
    status: type,
    duration: 3000,
    isClosable: true,
  });
}
