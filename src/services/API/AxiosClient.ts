import Axios from "axios";
import { BASE_URL } from "./routes";

const AxiosClient = Axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

const fullfilledResponseHandler = (resp: any) => {};
const errorResponseHandler = (err: any) => {};

Axios.interceptors.response.use(
  fullfilledResponseHandler,
  errorResponseHandler
);

export default AxiosClient;
