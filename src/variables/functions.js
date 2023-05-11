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

export function getAdminDashData(username, token, mode, extradata = null) {
  var formData = new FormData();
  formData.append('action', 'dashboard');
  formData.append('username', username);
  formData.append('token', token);
  formData.append('mode', mode);
  if (extradata) {
    var keys = Object.keys(extradata);
    for (var i = 0; i < keys.length; i++) {
      formData.append(keys[i], extradata[keys[i]]);
    }
  }
  return axios.post(apiUrl(), formData).then(data => {
    console.log(data);
    return data.data;
  });
}

export function setAdminDashData(username, token, mode, data) {
  var formData = new FormData();
  formData.append('action', 'dashboard');
  formData.append('username', username);
  formData.append('token', token);
  formData.append('mode', mode);
  formData.append('data', JSON.stringify(data));
  return axios.post(apiUrl(), formData).then(data => {
    console.log(data);
    return data.data;
  });
}

export function uploadImage(imagefile) {
  var filename = imagefile.name;
  var formData = new FormData();
  formData.append('action', 'uploadImage');
  formData.append('filename', filename);
  formData.append('image', imagefile);
  return axios.post(apiUrl(), formData).then(data => {
    console.log(data);
    return data.data.data.image;
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
