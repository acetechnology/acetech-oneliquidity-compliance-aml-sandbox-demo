import * as aml from "@/store/modules/aml.js";
import * as notification from "@/store/modules/notification.js";

import { createStore } from "vuex";

export default createStore({
  modules: {
    aml,
    notification,
  },
  state: {
    types: ["source", "destination"],
  },
});
