import { g as getLocalstoryToken, l as login$1 } from "./index.js";
import { f as defineComponent, g as ref, h as reactive, j as onMounted, k as createElementBlock, l as createBaseVNode, u as unref, m as createVNode, w as withCtx, n as useRouter, r as resolveComponent, o as openBlock, p as createTextVNode, t as toDisplayString, q as pushScopeId, s as popScopeId } from "./vendor.js";
import { f as fullScreen } from "./full-screen.js";
import { _ as _export_sfc } from "./main.js";
var login_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-710ad960"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = ["src"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "login-title" }, "\u8D26\u53F7\u767B\u9646", -1));
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u767B\u5F55");
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "statement" }, "\u514D\u8D23\u58F0\u660E\uFF1A\u672C\u4EA7\u54C1\u4EC5\u4E3A\u8F85\u52A9\u5DE5\u5177\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4F7F\u7528\uFF0C\u7981\u6B62\u7528\u4E8E\u5546\u4E1A\u7528\u9014!", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  setup(__props) {
    const router = useRouter();
    const emailSuffix = "@reta-inc.com";
    const ruleFormRef = ref();
    const form = reactive({
      email: "",
      password: ""
    });
    const rules = reactive({
      email: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u90AE\u7BB1\u767B\u5F55"
        },
        {
          pattern: /^[a-zA-Z][a-zA-Z0-9_-]*$/,
          message: "\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"
        }
      ],
      password: [{ required: true, message: "\u8BF7\u8F93\u5165\u5BC6\u7801" }]
    });
    onMounted(async () => {
      const token = await getLocalstoryToken();
      if (token) {
        router.push({ name: "platform" });
      } else {
        router.push({ path: "/" });
      }
    });
    const handlerFullScreen = async () => {
      let url = chrome.runtime.getURL("popup.html");
      await chrome.windows.create({
        url,
        width: 768,
        height: 685,
        left: 500
      });
    };
    const saveToken = (token) => {
      return new Promise((resolve, reject) => {
        try {
          chrome.storage.local.set({ "token": token }, () => {
            var error = chrome.runtime.lastError;
            if (error) {
              reject(error);
            }
            resolve(token);
            console.log("\u{1F604} Save Token Success\uFF5E");
          });
        } catch (error) {
          reject(error);
        }
      });
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      await formEl.validate(async (valid, fields) => {
        if (valid) {
          try {
            const { data } = await login$1({
              email: `${form.email}@reta-inc.com`,
              password: form.password
            });
            await saveToken(data.authToken);
            router.push({
              name: "home"
            });
          } catch (error) {
            console.log("\u{1F645} \u767B\u9646\u5931\u8D25", error);
          }
        } else {
          console.log("\u{1F645} \u9A8C\u8BC1\u5931\u8D25!", valid);
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_card = resolveComponent("el-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: "full-screen",
          onClick: handlerFullScreen
        }, [
          createBaseVNode("img", {
            src: unref(fullScreen),
            alt: "fullScreen"
          }, null, 8, _hoisted_2)
        ]),
        createVNode(_component_el_card, { class: "login-box" }, {
          header: withCtx(() => [
            _hoisted_3
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "ruleFormRef",
              ref: ruleFormRef,
              model: form,
              rules,
              "status-icon": "",
              "label-width": "60px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "\u90AE\u7BB1:",
                  prop: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: form.email,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.email = $event),
                      name: "email",
                      label: "\u90AE\u7BB1",
                      size: "large",
                      placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u90AE\u7BB1\u767B\u5F55"
                    }, {
                      append: withCtx(() => [
                        createTextVNode(toDisplayString(emailSuffix))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  class: "password",
                  label: "\u5BC6\u7801:",
                  prop: "password"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: form.password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.password = $event),
                      "show-password": "",
                      "label-width": "100px",
                      type: "password",
                      name: "password",
                      label: "\u5BC6\u7801",
                      size: "large",
                      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_row, {
                  gutter: 20,
                  type: "flex",
                  justify: "center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      class: "login-btn",
                      round: "",
                      onClick: _cache[2] || (_cache[2] = ($event) => submitForm(ruleFormRef.value))
                    }, {
                      default: withCtx(() => [
                        _hoisted_4
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }),
        _hoisted_5
      ]);
    };
  }
});
var login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-710ad960"]]);
export { login as default };
