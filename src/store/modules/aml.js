import NetworkService from "@/services/NetworkService.js";

export const namespaced = true;

export const state = {
  analysis: {},
};

export const mutations = {
  SET_ANALYSIS(state, analysis) {
    state.analysis = analysis;
  },
};

export const actions = {
  amlReqSingleTX({ dispatch }, body) {
    return NetworkService.amlReqSingleTX(body)
      .then((req) => {
        console.log(req);
        const notification = {
          type: "success",
          message: "Your aml request was sent successfully!",
        };
        dispatch("notification/add", notification, { root: true });
        return req;
      })
      .catch((error) => {
        console.log(error);
        const notification = {
          type: "error",
          message: "There was a problem sending your aml: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  amlReqWalletTX({ dispatch }, body) {
    return NetworkService.amlReqSingleWalletTX(body)
      .then((req) => {
        console.log(req);
        const notification = {
          type: "success",
          message: "Your aml request was sent successfully!",
        };
        dispatch("notification/add", notification, { root: true });
        return req;
      })
      .catch((error) => {
        console.log(error);
        const notification = {
          type: "error",
          message: "There was a problem sending your aml: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  amlReqBatchWalletTX({ dispatch }, body) {
    return NetworkService.amlReqBatchWalletTX(body)
      .then((req) => {
        const notification = {
          type: "success",
          message: "Your aml request was sent successfully!",
        };
        dispatch("notification/add", notification, { root: true });
        return req;
      })
      .catch((error) => {
        console.log(error);
        const notification = {
          type: "error",
          message: "There was a problem sending your aml: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  fetchWalletAnalysis({ state, commit }, id) {
    if (id == state.analysis.id) {
      return state.analysis;
    }
    return NetworkService.getWalletAnalysis(id).then((response) => {
      console.log(response.data.data);
      commit("SET_ANALYSIS", response.data.data);
      return response.data.data;
    });
  },
};
