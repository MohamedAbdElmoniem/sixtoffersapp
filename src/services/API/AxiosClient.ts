import Axios from "axios";
import { BASE_URL } from "./routes";

const AxiosClient = Axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

// Intercept API Success response
const fullfilledResponseHandler = (resp: any) => {
  return resp;
};

// Intercept API ERRORS
const errorResponseHandler = (err: any) => {
  return err;
};

Axios.interceptors.response.use(
  fullfilledResponseHandler,
  errorResponseHandler
);

export default AxiosClient;
