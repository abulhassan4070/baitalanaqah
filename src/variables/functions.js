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
