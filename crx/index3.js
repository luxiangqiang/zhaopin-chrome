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
import { f as defineComponent, g as ref, h as reactive, B as watch, j as onMounted, k as createElementBlock, l as createBaseVNode, t as toDisplayString, u as unref, m as createVNode, w as withCtx, C as withDirectives, d as createBlock, r as resolveComponent, D as resolveDirective, o as openBlock, F as Fragment, x as renderList, q as pushScopeId, s as popScopeId, p as createTextVNode, n as useRouter, G as useRoute } from "./vendor.js";
import { g as getJobs, a as getCompanyList } from "./index.js";
import { P as PLATFORM_MAP, G as GUOPIN_SCHOOL_RECRUITMENT, a as GUOPIN_SOCIAL_RECRUITMENT, J as JIUYEWANG_URL, N as NUIKE_URL, S as SHIXISENG_PRACTICE_URL, b as SHIXISENG_SCHOOL_URL, c as JOB_COLUMNS } from "./contants.js";
import { a as getLocalstory } from "./index2.js";
import { f as fullScreen } from "./full-screen.js";
import { _ as _export_sfc } from "./main.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-045a1f8e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "contianer" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "statement" }, "\u514D\u8D23\u58F0\u660E\uFF1A\u672C\u4EA7\u54C1\u4EC5\u4E3A\u8F85\u52A9\u5DE5\u5177\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4F7F\u7528\uFF0C\u7981\u6B62\u7528\u4E8E\u5546\u4E1A\u7528\u9014!", -1));
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "width": "100px" } }, "\u62DB\u8058\u72B6\u6001\uFF1A", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "filter-text" }, "\u804C\u4F4D\uFF1A", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "filter-text" }, "\u7F16\u7801\uFF1A", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "width": "100px" } }, "\u62DB\u8058\u6027\u8D28\uFF1A", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "filter-text" }, "\u516C\u53F8\uFF1A", -1));
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u4E00\u952E\u53D1\u5E03");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" --> ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u9009\u62E9\u5E73\u53F0 ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" \u4E00\u955C\u5230\u5E95 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const loading = ref(false);
    const tableData = ref([]);
    const totalCount = ref(0);
    const pageNo = ref(1);
    const pageSize = ref(50);
    const companyOptions = ref([]);
    const recruitmentTypeOptions = ref([
      {
        label: "\u5168\u90E8",
        value: ""
      },
      {
        label: "\u793E\u62DB",
        value: "SOCIAL"
      },
      {
        label: "\u6821\u62DB",
        value: "ON_CAMPUS"
      },
      {
        label: "\u5B9E\u4E60",
        value: "PRACTICE"
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
      code: "",
      status: "",
      opened: "",
      recruitmentType: ""
    });
    const multipleSelection = ref([]);
    const singlePublishJob = ref(() => {
    });
    ref(() => {
    });
    const platformName = ref("");
    watch(query, () => {
      getJobData();
    });
    onMounted(async () => {
      getJobData();
      getCompanyLists();
      platformSelect();
      const platName = await getLocalstory("platName");
      platformName.value = PLATFORM_MAP[platName];
    });
    const handlerSelectPlatform = () => {
      router.replace("/platform");
    };
    const handlerSinglePublishJob = (job) => {
      singlePublishJob.value(job);
    };
    const platformSelect = async () => {
      const platform = await getLocalstory("platName");
      switch (platform) {
        case "guopin":
          singlePublishJob.value = guopinPulishJob;
          break;
        case "24365":
          singlePublishJob.value = jiuyePublishJob;
          break;
        case "nuike":
          singlePublishJob.value = nuikePublishJob;
          break;
        case "shixiseng":
          singlePublishJob.value = shixisengPublishJob;
      }
    };
    const oneClickCollection = async () => {
      const platform = route.query.platfrom ? String(route.query.platfrom) : "";
      router.push({
        name: "collect-resumes",
        query: {
          platfrom: platform
        }
      });
    };
    const guopinPulishJob = async (job) => {
      await setJobLocalstory("job", "single", job);
      switch (job.recruitmentTypeName) {
        case "\u793E\u62DB":
          window.open(GUOPIN_SOCIAL_RECRUITMENT);
          break;
        case "\u6821\u62DB":
        case "\u5B9E\u4E60":
          window.open(GUOPIN_SCHOOL_RECRUITMENT);
          break;
      }
    };
    const jiuyePublishJob = async (job) => {
      await setJobLocalstory("job", "single", job);
      window.open(JIUYEWANG_URL);
    };
    const nuikePublishJob = async (job) => {
      await setJobLocalstory("job", "single", job);
      window.open(NUIKE_URL);
    };
    const shixisengPublishJob = async (job) => {
      await setJobLocalstory("job", "single", job);
      switch (job.recruitmentTypeName) {
        case "\u6821\u62DB":
          window.open(SHIXISENG_SCHOOL_URL);
          break;
        case "\u5B9E\u4E60":
          window.open(SHIXISENG_PRACTICE_URL);
          break;
      }
    };
    const handleSelectionChange = (val) => {
      multipleSelection.value = val;
    };
    const setJobLocalstory = (key, type, data) => {
      return new Promise((resolve, reject) => {
        try {
          chrome.storage.local.set({
            [key]: data,
            type,
            multipleIndex: 0,
            count: Array.isArray(data) ? data.length : 0
          }, () => {
            var error = chrome.runtime.lastError;
            if (error) {
              reject(error);
            }
            resolve(1);
            console.log("\u{1F604} Save Data Success\uFF5E");
          });
        } catch (error) {
          reject(error);
        }
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
        pageSize: pageSize.value,
        excludeOurCompany: 1
      }, temp);
      try {
        const { data } = await getJobs(params);
        tableData.value = (_a = data == null ? void 0 : data.list) == null ? void 0 : _a.map((el) => __spreadProps(__spreadValues({}, el), {
          companyName: el.company.name,
          name: el.publishedBy.name,
          hiringManager: el.company.followerName
        }));
        totalCount.value = data.totalCount;
      } catch (error) {
        console.error("\u{1F645} \u83B7\u53D6\u804C\u4F4D\u6570\u636E\u9519\u8BEF", error);
      } finally {
        loading.value = false;
      }
    };
    const handlerFullScreen = async () => {
      let url = chrome.runtime.getURL("popup.html");
      await chrome.windows.create({
        url,
        width: 768,
        height: 685,
        left: 500
      });
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
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_card = resolveComponent("el-card");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_table = resolveComponent("el-table");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("header", null, [
          createBaseVNode("div", null, "\u62A2\u955C\u5C0F\u52A9\u624B(" + toDisplayString(platformName.value) + ")", 1),
          _hoisted_2,
          createBaseVNode("div", {
            class: "full-screen",
            onClick: handlerFullScreen
          }, [
            createBaseVNode("img", {
              src: unref(fullScreen),
              alt: "fullScreen"
            }, null, 8, _hoisted_3)
          ])
        ]),
        createVNode(_component_el_card, null, {
          default: withCtx(() => [
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 8 }, {
                  default: withCtx(() => [
                    _hoisted_4,
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
                    _hoisted_5,
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
                    _hoisted_6,
                    createVNode(_component_el_input, {
                      class: "input-item",
                      placeholder: "\u8BF7\u8F93\u5165\u804C\u4F4D\u7F16\u7801",
                      modelValue: query.code,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => query.code = $event),
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
                createVNode(_component_el_col, { span: 8 }, {
                  default: withCtx(() => [
                    _hoisted_7,
                    createVNode(_component_el_select, {
                      modelValue: query.recruitmentType,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => query.recruitmentType = $event),
                      class: "interview-room-status",
                      placeholder: "\u8BF7\u8F93\u5165\u62DB\u8058\u6027\u8D28"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(recruitmentTypeOptions.value, (item) => {
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
                    _hoisted_8,
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
            data: tableData.value,
            stripe: "",
            border: "",
            height: "332",
            onSelectionChange: handleSelectionChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(JOB_COLUMNS), (item) => {
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
                    onClick: ($event) => handlerSinglePublishJob(scope.row)
                  }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              }),
              _hoisted_10
            ]),
            _: 1
          }, 8, ["data"])), [
            [_directive_loading, loading.value]
          ])
        ]),
        createBaseVNode("footer", null, [
          createVNode(_component_el_pagination, {
            class: "pagination",
            background: "",
            layout: "prev, pager, next, total",
            total: totalCount.value,
            onSizeChange: handleSizeChange,
            onCurrentChange: handleCurrentChange,
            "current-page": pageNo.value,
            "page-sizes": [10, 20, 30, 40, 50, 100],
            "page-size": pageSize.value
          }, null, 8, ["total", "current-page", "page-size"]),
          createBaseVNode("div", null, [
            createVNode(_component_el_button, {
              class: "publish-btn",
              type: "primary",
              onClick: handlerSelectPlatform
            }, {
              default: withCtx(() => [
                _hoisted_11
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              class: "publish-btn",
              type: "primary",
              onClick: oneClickCollection
            }, {
              default: withCtx(() => [
                _hoisted_12
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-045a1f8e"]]);
export { index as default };
