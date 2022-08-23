var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { c as createStore, a as axios, _ as _Notify, d as defineComponent, r as ref, b as reactive, w as watch, o as onMounted, e as resolveComponent, f as resolveDirective, g as openBlock, h as createElementBlock, i as createBaseVNode, j as createVNode, k as withCtx, F as Fragment, l as renderList, m as createBlock, n as withDirectives, u as unref, p as createTextVNode, q as pushScopeId, s as popScopeId, t as createApp, v as index$1 } from "./vendor.js";
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
const BASE_URL = "http://qa-api.reta-inc.com";
const httpRequester = async (url, methods, data, headers) => {
  const response = await axios({
    url: BASE_URL + url,
    method: methods,
    params: data,
    headers
  });
  if (response.status !== 200) {
    _Notify.error({
      message: "\u670D\u52A1\u5668\u672A\u77E5\u5F02\u5E38",
      showClose: false
    });
    return;
  }
  return response.data;
};
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwbHQiOiJBX1dFQl9QQyIsImlkIjozNjc4LCJleHAiOjE2NjIyODI4MDd9.ALk3p0M70D-9hC6h3xaCSU6puDOSkUXTwy5LTorDaNM";
function getJobs(data) {
  return httpRequester("/admin/v1/job/list", "get", data, { token });
}
function getCompanyList(params) {
  return httpRequester("/admin/v1/op/platform/filter", "get", params, { token });
}
const jobColumns = [
  {
    label: "\u516C\u53F8",
    prop: "companyName",
    width: 200
  },
  {
    label: "\u804C\u4F4D",
    prop: "title",
    width: 100
  },
  {
    label: "\u804C\u4F4D\u7F16\u7801",
    prop: "code",
    width: 70
  },
  {
    label: "\u5730\u533A",
    prop: "officeLocation",
    width: 100
  },
  {
    label: "\u5F53\u524D\u72B6\u6001",
    prop: "statusName",
    width: 70
  },
  {
    label: "\u9762\u8BD5\u95F4\u72B6\u6001",
    prop: "openedDesc",
    width: 90
  },
  {
    label: "\u804C\u4F4D\u5728\u7EBF\u5929\u6570",
    prop: "onlineDays",
    width: 100
  },
  {
    label: "\u7D2F\u8BA1\u6295\u9012\u4EBA\u6570",
    prop: "totalCandidateCount",
    width: 100
  },
  {
    label: "\u53D1\u5E03\u4EBA",
    prop: "name",
    width: 60
  },
  {
    label: "\u53D1\u5E03\u65F6\u95F4",
    prop: "publishedAt",
    width: 140
  }
];
var App_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-126fbd00"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "contianer" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "\u56FD\u8058\u4E00\u952E\u53D1\u5E03\u804C\u4F4D\u52A9\u624B", -1));
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E00\u952E\u53D1\u5E03\u804C\u4F4D");
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "width": "90px" } }, "\u62DB\u8058\u72B6\u6001\uFF1A", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "filter-text" }, "\u804C\u4F4D\uFF1A", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "filter-text" }, "\u5730\u533A\uFF1A", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "width": "100px" } }, "\u9762\u8BD5\u95F4\u72B6\u6001\uFF1A", -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "width": "42px" } }, "\u516C\u53F8\uFF1A", -1));
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u4E00\u952E\u53D1\u5E03");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const loading = ref(false);
    const tableData = ref([]);
    const totalCount = ref(0);
    const pageNo = ref(1);
    const pageSize = ref(10);
    const companyOptions = ref([]);
    ref([]);
    const interviewRoomStatusOptions = ref([
      {
        label: "\u5168\u90E8",
        value: ""
      },
      {
        label: "\u5DF2\u5F00\u542F",
        value: "1"
      },
      {
        label: "\u5F85\u5F00\u542F",
        value: "-1"
      },
      {
        label: "\u5DF2\u5173\u95ED",
        value: "0"
      }
    ]);
    const recruitmentStatusOptions = ref([
      {
        label: "\u5168\u90E8",
        value: ""
      },
      {
        label: "\u62DB\u8058\u4E2D",
        value: "PUBLISHED"
      },
      {
        label: "\u5DF2\u5173\u95ED",
        value: "CLOSED"
      }
    ]);
    const query = reactive({
      company: "",
      job: "",
      city: "",
      status: "",
      opened: ""
    });
    watch(query, () => {
      getJobData();
    });
    onMounted(() => {
      getJobData();
      getCompanyLists();
    });
    const publishJob = async (job) => {
      window.open("https://campus.iguopin.com/index.php?m=&c=company&a=jobs_add");
      setJobLocalstory(job);
    };
    const setJobLocalstory = (job) => {
      chrome.storage.sync.set({ "job": job }, function() {
        console.log("\u{1F604} Save Job Success\uFF5E");
      });
    };
    const getJobData = async () => {
      var _a;
      loading.value = true;
      const temp = Object.assign({}, query);
      temp.strCompanyIds = Array.isArray(temp.company) ? temp.company.join(",") : "";
      delete temp.company;
      Object.keys(temp).forEach((key) => {
        if (!temp[key] || temp[key] === "") {
          delete temp[key];
        }
      });
      const params = __spreadValues({
        pageNo: pageNo.value,
        pageSize: pageSize.value
      }, temp);
      try {
        const { data } = await getJobs(params);
        tableData.value = (_a = data == null ? void 0 : data.list) == null ? void 0 : _a.map((el) => __spreadProps(__spreadValues({}, el), {
          companyName: el.company.name,
          name: el.publishedBy.name
        }));
        totalCount.value = data.totalCount;
      } catch (error) {
        console.error("\u{1F645} \u83B7\u53D6\u804C\u4F4D\u6570\u636E\u9519\u8BEF", error);
      } finally {
        loading.value = false;
      }
    };
    const getCompanyLists = async () => {
      loading.value = true;
      try {
        const { data } = await getCompanyList({ type: "COMPANY", companyIds: "" });
        companyOptions.value = data.map((el) => ({
          label: el.name,
          value: el.id
        }));
      } catch (error) {
        console.error("\u{1F645} \u83B7\u53D6\u516C\u53F8\u5217\u8868\u9519\u8BEF", error);
      } finally {
        loading.value = false;
      }
    };
    const handleSizeChange = (value) => {
      pageSize.value = value;
      getJobData();
    };
    const handleCurrentChange = (value) => {
      pageNo.value = value;
      getJobData();
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_card = resolveComponent("el-card");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("header", _hoisted_2, [
          _hoisted_3,
          createVNode(_component_el_button, {
            class: "publish-btn",
            type: "primary",
            onClick: publishJob
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        createVNode(_component_el_card, { shadow: "always" }, {
          default: withCtx(() => [
            createVNode(_component_el_row, { class: "mgb" }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 7 }, {
                  default: withCtx(() => [
                    _hoisted_5,
                    createVNode(_component_el_select, {
                      modelValue: query.status,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.status = $event),
                      placeholder: "\u8BF7\u9009\u62E9\u62DB\u8058\u72B6\u6001"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(recruitmentStatusOptions.value, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.value + "company",
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 7 }, {
                  default: withCtx(() => [
                    _hoisted_6,
                    createVNode(_component_el_input, {
                      class: "input-item",
                      placeholder: "\u8BF7\u8F93\u5165\u804C\u4F4D",
                      modelValue: query.job,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => query.job = $event),
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 7 }, {
                  default: withCtx(() => [
                    _hoisted_7,
                    createVNode(_component_el_input, {
                      class: "input-item",
                      placeholder: "\u8BF7\u8F93\u5165\u804C\u4F4D",
                      modelValue: query.city,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => query.city = $event),
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_row, { class: "row" }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 7 }, {
                  default: withCtx(() => [
                    _hoisted_8,
                    createVNode(_component_el_select, {
                      modelValue: query.opened,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => query.opened = $event),
                      class: "interview-room-status",
                      placeholder: "\u8BF7\u9009\u62E9\u9762\u8BD5\u95F4\u72B6\u6001"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(interviewRoomStatusOptions.value, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.value + "status",
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 7 }, {
                  default: withCtx(() => [
                    _hoisted_9,
                    createVNode(_component_el_select, {
                      modelValue: query.company,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => query.company = $event),
                      multiple: "",
                      filterable: "",
                      "collapse-tags": "",
                      placeholder: "\u8BF7\u9009\u62E9\u516C\u53F8"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(companyOptions.value, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.value + "company",
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("section", null, [
          withDirectives((openBlock(), createBlock(_component_el_table, {
            class: "table",
            data: tableData.value,
            stripe: "",
            border: "",
            height: "300"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                type: "selection",
                width: "55"
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jobColumns), (item) => {
                return openBlock(), createBlock(_component_el_table_column, {
                  prop: item.prop,
                  label: item.label,
                  width: item.width
                }, null, 8, ["prop", "label", "width"]);
              }), 256)),
              createVNode(_component_el_table_column, {
                fixed: "right",
                label: "\u64CD\u4F5C",
                width: "100px",
                class: "operate",
                align: "center"
              }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_button, {
                    type: "text",
                    size: "small",
                    onClick: ($event) => publishJob(scope.row)
                  }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])), [
            [_directive_loading, loading.value]
          ]),
          createVNode(_component_el_pagination, {
            class: "pagination",
            background: "",
            layout: "total, sizes, prev, pager, next",
            total: totalCount.value,
            onSizeChange: handleSizeChange,
            onCurrentChange: handleCurrentChange,
            "current-page": pageNo.value,
            "page-sizes": [10, 20, 30, 40, 50, 100],
            "page-size": pageSize.value
          }, null, 8, ["total", "current-page", "page-size"])
        ])
      ]);
    };
  }
});
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-126fbd00"]]);
const app = createApp(App);
app.use(index$1, { size: "mini" }).use(store).mount("#app");
