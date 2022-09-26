import { c as createWebHashHistory, a as createRouter, b as createStore, d as createBlock, o as openBlock, r as resolveComponent, e as createApp, E as ElementPlusIconsVue, i as installer, z as zhCn } from "./vendor.js";
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
    component: () => __vitePreload(() => import("./login.js"), true ? ["login.js","login.css","index.js","vendor.js","full-screen.js"] : void 0)
  },
  {
    path: "/platform",
    name: "platform",
    component: () => __vitePreload(() => import("./platform-selection.js"), true ? ["platform-selection.js","platform-selection.css","vendor.js"] : void 0)
  },
  {
    path: "/home",
    name: "home",
    component: () => __vitePreload(() => import("./index2.js"), true ? ["index2.js","index.css","vendor.js","index.js","contants.js","full-screen.js"] : void 0)
  },
  {
    path: "/collect-resumes",
    name: "collect-resumes",
    component: () => __vitePreload(() => import("./collect-resumes.js"), true ? ["collect-resumes.js","collect-resumes.css","contants.js","vendor.js","index.js"] : void 0)
  }
];
const options = {
  history: createWebHashHistory(),
  routes
};
const router = createRouter(options);
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
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(installer, { size: "mini", locale: zhCn }).use(store).use(router).mount("#app");
export { _export_sfc as _ };
