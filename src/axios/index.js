import axios from "axios";

const baseUrl = "https://api.covid19api.com/total/country/";

const Axios = axios.create({
  baseUrl: baseUrl,
});

Axios.defaults.baseUrl = baseUrl;
Axios.defaults.headers.post["Content-Type"] = "application/json";

export default Axios;
