import axios from "axios";

const BASE_URL =
  "https://social-server-production-bda9.up.railway.app/" ||
  "http://localhost:3001/";

class IbanbanApi {
  constructor(token) {
    this.token = token;
  }

  //Request builder.
  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { authorization: `Bearer ${this.token}` };
    const params = method === "get" ? data : {};
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      // console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  ///////////////// AUTH

  //Login
  static async login(data) {
    let res = await this.request(`auth/login`, data, "post");
    return res;
  }

  //Signup
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");

    return res;
  }
}

export default IbanbanApi;
