import { _ as _export_sfc, g as getLocalstoryToken, l as login$1, s as sendMonitorMessage } from "./main.js";
import { g as defineComponent, h as ref, j as reactive, k as onMounted, l as createElementBlock, m as createVNode, w as withCtx, u as useRouter, r as resolveComponent, o as openBlock, n as createTextVNode, t as toDisplayString, p as pushScopeId, q as popScopeId, s as createBaseVNode } from "./vendor.js";
var login_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-710ad960"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "login-title" }, "\u8D26\u53F7\u767B\u9646", -1));
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u767B\u5F55");
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
        router.push({ name: "home" });
      } else {
        router.push({ path: "/" });
      }
    });
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
            sendMonitorMessage(`\u3010\u76D1\u63A7\u62A5\u8B66-\u8D26\u53F7\u767B\u9646\u3011\uFF1A${form.email} \u8D26\u53F7\u5DF2\u767B\u9646\uFF5E`);
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
        createVNode(_component_el_card, { class: "login-box" }, {
          header: withCtx(() => [
            _hoisted_2
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "ruleFormRef",
              ref: ruleFormRef,
              model: form,
              rules,
              "status-icon": "",
              "label-width": "100px"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "\u4F01\u4E1A\u90AE\u7BB1:",
                  prop: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: form.email,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.email = $event),
                      name: "email",
                      label: "\u4F01\u4E1A\u90AE\u7BB1",
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
                      onClick: _cache[2] || (_cache[2] = ($event) => submitForm(ruleFormRef.value))
                    }, {
                      default: withCtx(() => [
                        _hoisted_3
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
        })
      ]);
    };
  }
});
var login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-710ad960"]]);
export { login as default };
