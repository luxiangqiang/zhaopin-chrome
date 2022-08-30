import { c as createWebHashHistory, a as createRouter, b as axios$1, E as ElNotification, d as createStore, e as createBlock, o as openBlock, r as resolveComponent, f as createApp, i as installer, z as zhCn } from "./vendor.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const scriptRel = "modulepreload";
const seen = {};
const base = "./";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const routes = [
  {
    path: "/",
    name: "login",
    component: () => __vitePreload(() => import("./login.js"), true ? ["login.js","login.css","vendor.js"] : void 0)
  },
  {
    path: "/home",
    name: "home",
    component: () => __vitePreload(() => import("./index.js"), true ? ["index.js","index.css","vendor.js"] : void 0)
  }
];
const options = {
  history: createWebHashHistory(),
  routes
};
const router = createRouter(options);
const BASE_URL = "https://a.reta-inc.com";
const DINGDING_URL = "https://oapi.dingtalk.com/robot/send?access_token=4b5c35cb0da73bff59ae79cfeffcaa24093bd4713b48f23ab0a48d9435c4b318";
const getLocalstoryToken = async () => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get("token", (result) => {
        resolve(result["token"]);
        console.log("\u{1F604} Get Token Success\uFF5E");
      });
    } catch (error) {
      reject(error);
    }
  });
};
const defaultHeaders = {
  platform: "A_WEB_PC"
};
const getToken = async (header) => {
  const token = await getLocalstoryToken();
  header.token = token;
};
const ErrorHandler = (data) => {
  const { success, message } = data;
  if (!success) {
    ElNotification({
      title: "\u9519\u8BEF",
      message,
      type: "error"
    });
    return;
  }
};
var axios = {
  get: async (url, data, headers) => {
    await getToken(defaultHeaders);
    return new Promise((resolve, reject) => {
      axios$1({
        url: BASE_URL + url,
        method: "GET",
        params: data,
        headers: Object.assign({}, defaultHeaders, headers)
      }).then((data2) => {
        ErrorHandler(data2.data);
        resolve(data2.data);
      }, reject);
    });
  },
  post: async (url, data, headers) => {
    await getToken(defaultHeaders);
    return new Promise((resolve, reject) => {
      axios$1({
        url: BASE_URL + url,
        method: "POST",
        data,
        headers: Object.assign({}, defaultHeaders, headers)
      }).then((data2) => {
        ErrorHandler(data2.data);
        resolve(data2.data);
      }, reject);
    });
  },
  monitor: async (data) => {
    return new Promise((resolve, reject) => {
      axios$1({
        url: DINGDING_URL,
        method: "POST",
        data
      }).then((data2) => {
        resolve(data2);
      }, reject);
    });
  }
};
async function login(data) {
  return await axios.post("/qj/v1/auth/token/login/email", data);
}
async function getJobs(data) {
  return await axios.get("/admin/v1/job/list", data);
}
async function getCompanyList(params) {
  return await axios.get("/admin/v1/op/platform/filter", params);
}
async function sendMonitorMessage(content) {
  const message = {
    "msgtype": "text",
    "text": {
      "content": content
    }
  };
  return await axios.monitor(message);
}
var monitor = {
  install: (app2) => {
    app2.provide("$monitor", sendMonitorMessage);
    app2.config.globalProperties["$monitor"] = sendMonitorMessage;
  }
};
var index = "";
var store = createStore({
  state() {
    return {
      interval: 60,
      autoRefresh: true
    };
  },
  getters: {
    getInterval(state) {
      return state.interval;
    },
    getAutoRefresh(state) {
      return state.autoRefresh;
    }
  },
  mutations: {
    setRefreshInterval(state, payload) {
      state.interval = payload;
    },
    setAutoRefresh(state, payload) {
      state.autoRefresh = payload;
    }
  },
  actions: {},
  modules: {}
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(_component_router_view);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const app = createApp(App);
app.use(installer, { size: "mini", locale: zhCn }).use(store).use(router).use(monitor).mount("#app");
export { _export_sfc as _, getJobs as a, getCompanyList as b, getLocalstoryToken as g, login as l, sendMonitorMessage as s };
