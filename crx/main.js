import { c as createStore, d as defineComponent, r as ref, a as resolveComponent, o as openBlock, b as createBlock, w as withCtx, e as createTextVNode, f as createApp, i as index$1 } from "./vendor.js";
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
const _sfc_main = defineComponent({
  name: "App",
  setup(props, context) {
    const tabPageId = ref(0);
    return {
      tabPageId
    };
  },
  methods: {
    async publishJob() {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: Number(tab.id), allFrames: true },
        files: ["./jquery.js", "./guopin_home.js"]
      });
    }
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u4E00\u952E\u53D1\u5E03\u804C\u4F4D ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createBlock(_component_el_button, {
    type: "primary",
    class: "btn-set-cookie",
    onClick: _ctx.publishJob,
    id: "changeColor"
  }, {
    default: withCtx(() => [
      _hoisted_1
    ]),
    _: 1
  }, 8, ["onClick"]);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const app = createApp(App);
app.use(index$1, { size: "mini" }).use(store).mount("#app");
