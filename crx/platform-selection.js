import { f as defineComponent, g as ref, h as reactive, k as createElementBlock, l as createBaseVNode, m as createVNode, w as withCtx, r as resolveComponent, o as openBlock, F as Fragment, x as renderList, q as pushScopeId, s as popScopeId, p as createTextVNode, n as useRouter, d as createBlock, y as normalizeStyle, A as ElMessage } from "./vendor.js";
import { s as saveLocalStory } from "./index2.js";
import { _ as _export_sfc } from "./main.js";
var guopin_logo = "./guopin_logo.png";
var img_logo = "./24365_logo.png";
var boss_logo = "./boss_logo.png";
var qianchengwuyou_logo = "./qianchengwuyou_logo.png";
var shixiseng_logo = "./shixiseng_logo.png";
var nuike_logo = "./nuike_logo.png";
var platformSelection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5b05264a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("header", null, [
  /* @__PURE__ */ createBaseVNode("div", null, "\u8BF7\u9009\u62E9\u4F7F\u7528\u5E73\u53F0")
], -1));
const _hoisted_3 = { class: "divider" };
const _hoisted_4 = { class: "content" };
const _hoisted_5 = ["src"];
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6211\u5DF2\u9605\u8BFB\u514D\u8D23\u58F0\u660E");
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, " \u514D\u8D23\u58F0\u660E\uFF1A\u672C\u4EA7\u54C1\u4EC5\u4E3A\u8F85\u52A9\u5DE5\u5177\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4F7F\u7528\uFF0C\u7981\u6B62\u7528\u4E8E\u5546\u4E1A\u7528\u9014\uFF0C\u5546\u7528\u8005\u81EA\u4E3B\u627F\u62C5\u6CD5\u5F8B\u8D23\u4EFB! ", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "platform-selection",
  setup(__props) {
    const statement = ref(false);
    const list = reactive([
      {
        images: guopin_logo,
        title: "\u56FD\u8058\u7F51",
        value: "guopin",
        height: "36px"
      },
      {
        images: img_logo,
        title: "24365",
        value: "24365",
        height: "47px"
      },
      {
        images: boss_logo,
        title: "Boss\u76F4\u8058",
        value: "zhipin",
        height: "28px"
      },
      {
        images: qianchengwuyou_logo,
        title: "\u524D\u7A0B\u65E0\u5FE7",
        value: "qiancheng",
        height: "44px"
      },
      {
        images: shixiseng_logo,
        title: "\u5B9E\u4E60\u50E7",
        value: "shixiseng",
        height: "40px"
      },
      {
        images: nuike_logo,
        title: "\u725B\u5BA2\u7F51",
        value: "nuike",
        height: "32px"
      }
    ]);
    const router = useRouter();
    const handlerSelectPlatform = async (item) => {
      if (statement.value) {
        await saveLocalStory("platName", item.value);
        router.push({
          name: "home",
          query: {
            platfrom: item.value
          }
        });
      } else {
        ElMessage({
          message: "\u8BF7\u5148\u9605\u8BFB\u514D\u8D23\u58F0\u660E\uFF5E",
          type: "warning"
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_Monitor = resolveComponent("Monitor");
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_card = resolveComponent("el-card");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_el_divider, null, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_Monitor)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("section", null, [
          createVNode(_component_el_row, { gutter: 20 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(list, (item, index) => {
                return openBlock(), createBlock(_component_el_col, {
                  span: 11,
                  key: index,
                  onClick: ($event) => handlerSelectPlatform(item)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_card, { shadow: "hover" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_4, [
                          createBaseVNode("img", {
                            style: normalizeStyle({ height: item.height }),
                            src: item.images,
                            alt: ""
                          }, null, 12, _hoisted_5)
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        createBaseVNode("footer", null, [
          createVNode(_component_el_checkbox, {
            modelValue: statement.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => statement.value = $event)
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }, 8, ["modelValue"]),
          _hoisted_7
        ])
      ]);
    };
  }
});
var platformSelection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b05264a"]]);
export { platformSelection as default };
