import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_ONEL_BASE_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: process.env.VUE_APP_ONEL_BEARER_TOKEN,
  },
  timeout: 10000,
});

export default {
  amlReqSingleTX(body) {
    return apiClient.post(`/compliance/v1/aml/txn/single`, body);
  },
  amlReqSingleWalletTX(body) {
    return apiClient.post(`/compliance/v1/aml/wallet/single`, body);
  },
  amlReqBatchWalletTX(body) {
    return apiClient.post(`/compliance/v1/aml/wallet/batch`, body);
  },
  getWalletAnalysis(id) {
    return apiClient.get(`/compliance/v1/aml/wallet/` + id);
  },
};
