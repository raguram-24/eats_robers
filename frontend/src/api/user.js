import axios from "axios";

export async function loginApi(email, password) {
  const url = "http://localhost:4000/user/login";
  axios
    .post(url, { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
