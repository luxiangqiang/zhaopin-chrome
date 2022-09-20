var __defProp = Object.defineProperty;
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
import { C as COLLECT_RESUME_COLUMN } from "./contants.js";
import { h as defineComponent, j as ref, l as onMounted, D as dayjs, G as computed, m as createElementBlock, n as createVNode, w as withCtx, v as createBaseVNode, t as toDisplayString, C as unref, y as withDirectives, e as createBlock, H as ElTable, I as ElMessage, E as ElNotification, r as resolveComponent, A as resolveDirective, o as openBlock, F as Fragment, B as renderList, J as createCommentVNode, q as pushScopeId, s as popScopeId, p as createTextVNode, u as useRouter } from "./vendor.js";
import { _ as _export_sfc, c as getLocalstory, d as clearLocalstory, e as setBadgeText, p as postResumeList } from "./main.js";
var collectResumes_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-413caf2c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("header", null, [
  /* @__PURE__ */ createBaseVNode("div", null, "\u56FD\u8058\u7F51\u7EDF\u6536\u53D1\u5C0F\u52A9\u624B")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u9009\u62E9\u65F6\u95F4\u6BB5\uFF1A", -1));
const _hoisted_4 = { class: "resume-count" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u4E00\u952E\u5165\u5E93");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u8FD4\u56DE\u4E0A\u7EA7 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u7A97\u53E3\u6A21\u5F0F ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u4E00\u952E\u6E05\u7A7A ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u4E00\u952E\u5237\u65B0 ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u4E00\u952E\u7EDF\u6536 ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u4E00\u952E\u5165\u5E93 ");
const _hoisted_12 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "collect-resumes",
  setup(__props) {
    const router = useRouter();
    const timeRange = ref([]);
    const loading = ref(false);
    const typeCheckList = ref(["\u793E\u62DB"]);
    const tableData = ref([]);
    const resumeList = ref([]);
    const multipleSelection = ref([]);
    const multipleTableRef = ref();
    onMounted(async () => {
      const dayAfter = dayjs().add(1, "day").format("YYYY-MM-DD");
      const dayBefore = dayjs().subtract(1, "day").format("YYYY-MM-DD");
      timeRange.value = [dayBefore, dayAfter];
      const resumes = await getLocalstory("resumes");
      resumeList.value = resumes;
      tableData.value = resumes.map((el) => __spreadValues(__spreadValues({
        subject: el.subject
      }, el.form.basic), el.form.forwards[0]));
    });
    const resumeCount = computed(() => tableData.value.length);
    const handlerRefresh = async () => {
      loading.value = true;
      const resumes = await getLocalstory("resumes");
      resumeList.value = resumes;
      tableData.value = resumes.map((el) => __spreadValues(__spreadValues({
        subject: el.subject
      }, el.form.basic), el.form.forwards[0]));
      loading.value = false;
      ElMessage({
        message: "\u5237\u65B0\u6210\u529F\uFF5E",
        type: "success"
      });
    };
    const handlerSetting = async () => {
      let url = chrome.runtime.getURL("popup.html");
      await chrome.windows.create({
        url,
        width: 768,
        height: 685
      });
    };
    const handleSelectionChange = (val) => {
      multipleSelection.value = val;
    };
    const handlerSingleImport = async (row) => {
      try {
        const data = resumeList.value.find((el) => row.subject === el.subject) || null;
        const { success } = await postResumeList({
          channel: "GUOPIN",
          items: [data]
        });
        if (success) {
          ElMessage({
            message: "\u5165\u5E93\u6210\u529F\uFF5E",
            type: "success"
          });
        }
        loading.value = false;
      } catch (error) {
        console.error("\u{1F645} \u4E00\u952E\u5165\u5E93:", error);
      }
    };
    const handlerCollect = () => {
      if (typeCheckList.value.length === 0) {
        ElNotification({
          title: "\u63D0\u793A",
          message: "\u8BF7\u52FE\u9009\u62DB\u8058\u7C7B\u578B\uFF01",
          type: "warning"
        });
        return;
      }
      if (timeRange.value.length < 2) {
        ElNotification({
          title: "\u63D0\u793A",
          message: "\u8BF7\u9009\u62E9\u5B8C\u6574\u65F6\u95F4\u6BB5\uFF01",
          type: "warning"
        });
        return;
      }
      clearLocalstory("resumes");
      chrome.runtime.sendMessage({
        channel: "CLEAR_RESUME_LIST"
      });
      if (typeCheckList.value.includes("\u793E\u62DB")) {
        const url = `https://www.iguopin.com/index.php?m=Home&c=Company&a=jobs_apply&is_reply=0&company_name=&company_uid=&dept_id=&department_id=&jobs_id=&audit=&nature=&is_confirm=&sex=&age=&political=&education_cn=&experience=&householdaddress_cn=&householdaddress=&address_cn=&address=&current_district_cn=&current_district=&apply_addtime=${timeRange.value[0]}+%2C+${timeRange.value[1]}&fullname=&speciality=&telephone=&school=&personal_look=&source=&edu1_level=&edu2_level=&major_category_cn=&major_category=&birthdate=&detail=&resume_tag=-1`;
        window.open(url);
      }
      if (typeCheckList.value.includes("\u6821\u62DB")) {
        const url = `https://campus.iguopin.com/index.php?m=&c=company&a=jobs_apply&is_reply=0&state=-1&open=1&datestart=${timeRange.value[0]}%2017:00:00&dateend=${timeRange.value[1]}%2017:00:00&edustart=&edueend=&birthdate=,`;
        window.open(url);
      }
    };
    const handlerCleart = () => {
      clearLocalstory("resumes");
      tableData.value = [];
      setBadgeText();
      ElMessage({
        message: "\u6E05\u7406\u6210\u529F\uFF5E",
        type: "success"
      });
    };
    const handlerImport = async () => {
      loading.value = true;
      try {
        const ids = multipleSelection.value.map((el) => el.subject);
        const data = resumeList.value.filter((el) => ids.includes(el.subject));
        const { success } = await postResumeList({
          channel: "GUOPIN",
          items: data
        });
        if (success) {
          ElMessage({
            message: "\u5165\u5E93\u6210\u529F\uFF5E",
            type: "success"
          });
          multipleTableRef.value.clearSelection();
        }
        loading.value = false;
      } catch (error) {
        console.error("\u{1F645} \u4E00\u952E\u5165\u5E93:", error);
      }
    };
    const handlerback = () => {
      router.replace("/home");
    };
    return (_ctx, _cache) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_card = resolveComponent("el-card");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_button = resolveComponent("el-button");
      const _component_Back = resolveComponent("Back");
      const _component_el_icon = resolveComponent("el-icon");
      const _component_Platform = resolveComponent("Platform");
      const _component_DeleteFilled = resolveComponent("DeleteFilled");
      const _component_Refresh = resolveComponent("Refresh");
      const _component_List = resolveComponent("List");
      const _component_Promotion = resolveComponent("Promotion");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_el_card, null, {
          default: withCtx(() => [
            createVNode(_component_el_row, null, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 11 }, {
                  default: withCtx(() => [
                    _hoisted_3,
                    createVNode(_component_el_date_picker, {
                      modelValue: timeRange.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => timeRange.value = $event),
                      class: "el-date-picker",
                      "value-format": "YYYY-MM-DD",
                      type: "daterange",
                      "range-separator": "\uFF5E",
                      "start-placeholder": "\u5F00\u59CB\u65F6\u95F4",
                      "end-placeholder": "\u622A\u6B62\u65F6\u95F4"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 10 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_checkbox_group, {
                      modelValue: typeCheckList.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => typeCheckList.value = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_checkbox, { label: "\u793E\u62DB" }),
                        createVNode(_component_el_checkbox, { label: "\u6821\u62DB" })
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
          createBaseVNode("div", _hoisted_4, "\u5171\u8BA1 " + toDisplayString(unref(resumeCount)) + " \u6761\u7B80\u5386", 1)
        ]),
        createBaseVNode("section", null, [
          withDirectives((openBlock(), createBlock(unref(ElTable), {
            ref_key: "multipleTableRef",
            ref: multipleTableRef,
            class: "table",
            data: tableData.value,
            stripe: "",
            border: "",
            height: "350",
            onSelectionChange: handleSelectionChange
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                type: "selection",
                width: "55"
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(COLLECT_RESUME_COLUMN), (item) => {
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
                    onClick: ($event) => handlerSingleImport(scope.row)
                  }, {
                    default: withCtx(() => [
                      _hoisted_5
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
          ])
        ]),
        createBaseVNode("footer", null, [
          createVNode(_component_el_button, {
            type: "primary",
            onClick: handlerback
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Back)
                ]),
                _: 1
              }),
              _hoisted_6
            ]),
            _: 1
          }),
          createVNode(_component_el_button, {
            type: "primary",
            onClick: handlerSetting
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Platform)
                ]),
                _: 1
              }),
              _hoisted_7
            ]),
            _: 1
          }),
          createVNode(_component_el_button, {
            type: "primary",
            onClick: handlerCleart
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_DeleteFilled)
                ]),
                _: 1
              }),
              _hoisted_8
            ]),
            _: 1
          }),
          createVNode(_component_el_button, {
            type: "primary",
            onClick: handlerRefresh
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Refresh)
                ]),
                _: 1
              }),
              _hoisted_9
            ]),
            _: 1
          }),
          createVNode(_component_el_button, {
            type: "primary",
            onClick: handlerCollect
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_List)
                ]),
                _: 1
              }),
              _hoisted_10
            ]),
            _: 1
          }),
          createVNode(_component_el_button, {
            type: "primary",
            disabled: multipleSelection.value.length === 0,
            onClick: handlerImport
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Promotion)
                ]),
                _: 1
              }),
              _hoisted_11,
              multipleSelection.value.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_12, "(" + toDisplayString(multipleSelection.value.length) + ")", 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]);
    };
  }
});
var collectResumes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-413caf2c"]]);
export { collectResumes as default };
