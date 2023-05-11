// export  const apiUrl = "https://api.mahabhojanam.com/admin/v2.php";
export const apiUrl = () => {
  return 'https://baitalanaqah.chargurev.com/';
};
export const pageUrl = () => {
  var url = window.location.href;
  // domain name
  var domain = url.split('/')[2];

  if (domain === 'localhost:3000' || domain === 'localhost:3001') {
    return 'http://localhost/';
  } else if (
    domain === 'testadmin.mahabhojanam.com' ||
    domain === 'testadmin.mahabhojanam.com'
  ) {
    return 'https://testapi.mahabhojanam.com/';
  } else {
    return 'https://api.mahabhojanam.com/';
  }
};
export const webUrl = () => {
  var url = window.location.href;
  // domain name
  var domain = url.split('/')[2];

  if (domain === 'localhost:3000' || domain === 'localhost:3001') {
    return 'http://localhost/';
  } else if (
    domain === 'testadmin.mahabhojanam.com' ||
    domain === 'testadmin.mahabhojanam.com'
  ) {
    return 'https://www.test.mahabhojanam.com/';
  } else {
    return 'https://www.mahabhojanam.com/';
  }
};
export const userApiUrl = () => {
  var url = window.location.href;
  var domain = url.split('/')[2];

  if (domain === 'localhost:3000' || domain === 'localhost:3001') {
    return 'http://localhost/user/v2.php';
  } else if (
    domain === 'testadmin.mahabhojanam.com' ||
    domain === 'testadmin.mahabhojanam.com'
  ) {
    return 'https://testapi.mahabhojanam.com/user/v2.php';
  } else {
    return 'https://api.mahabhojanam.com/user/v2.php';
  }
};
export const boxBg = 'secondaryGray.300';
export const brandColor = 'brand.500';
export const shadow = '14px 17px 40px 4px rgba(112, 144, 176, 0.18)';
