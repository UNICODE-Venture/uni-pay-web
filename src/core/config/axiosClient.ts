import axios from "axios";
import Apis from "./apis";

/** Axios client to make HTTP operations */
const axiosClient = axios.create({ baseURL: Apis.moyasarUrl });
export default axiosClient;
