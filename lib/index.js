import { defineComponent as p, openBlock as r, createElementBlock as $, renderSlot as x, createBlock as k, withCtx as C, createElementVNode as f, ref as A, h as u, normalizeClass as T, Fragment as W, createVNode as V, toDisplayString as z, computed as H, onMounted as q, Transition as D, withDirectives as j, normalizeStyle as N, resolveDynamicComponent as O, vShow as K, render as S, createCommentVNode as E, createTextVNode as R } from "vue";
const G = ["viewBox"], b = /* @__PURE__ */ p({
  __name: "Icon",
  props: {
    useLink: { type: Boolean, default: !1 },
    viewBox: { default: "0 0 1024 1024" }
  },
  setup(t) {
    return (e, n) => (r(), $("svg", {
      viewBox: e.useLink ? void 0 : e.viewBox,
      "aria-hidden": "true",
      class: "nt-icon"
    }, [
      x(e.$slots, "default")
    ], 8, G));
  }
}), J = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M12 23a11 11 0 100-22 11 11 0 000 22zM8.82 7.4L12 10.6l3.18-3.19 1.42 1.42L13.4 12l3.19 3.18-1.42 1.42L12 13.4 8.82 16.6 7.4 15.18 10.6 12 7.4 8.82 8.82 7.4z"
}, null, -1), we = /* @__PURE__ */ p({
  __name: "MaskCloseIcon",
  setup(t) {
    return (e, n) => (r(), k(b, { "view-box": "0 0 24 24" }, {
      default: C(() => [
        J
      ]),
      _: 1
    }));
  }
}), P = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M15.1 5.9a6.5 6.5 0 10-9.2 9.2 6.5 6.5 0 009.2-9.2zM4.49 4.5a8.5 8.5 0 0112.69 11.27l5.34 5.35-1.41 1.41-5.35-5.34A8.5 8.5 0 014.5 4.49z"
}, null, -1), xe = /* @__PURE__ */ p({
  __name: "SearchIcon",
  setup(t) {
    return (e, n) => (r(), k(b, { "view-box": "0 0 24 24" }, {
      default: C(() => [
        P
      ]),
      _: 1
    }));
  }
}), Q = ["type", "placeholder"], be = /* @__PURE__ */ p({
  __name: "Input",
  props: {
    htmlType: { default: "text" },
    placeholder: { default: "" }
  },
  setup(t) {
    return (e, n) => (r(), $("input", {
      type: e.htmlType,
      class: "nt-input",
      placeholder: e.placeholder
    }, null, 8, Q));
  }
});
function U(t) {
  return t instanceof Element;
}
function X(t, e) {
  let n = !1;
  return t.length && (n = t.some((o) => o == null ? !1 : o.contains(e)), n || (n = t.includes(e))), n;
}
const w = /* @__PURE__ */ new Map();
document.addEventListener(
  "click",
  (t) => {
    for (const e of w.values())
      for (const { documentHandler: n } of e)
        n(t);
  },
  !0
);
function F(t, e) {
  let n = [];
  return Array.isArray(e.arg) ? n = e.arg : U(e.arg) && n.push(e.arg), (o) => {
    const l = o.target, c = !e || !e.instance, h = !l, _ = t.contains(l), d = t === l, i = X(n, l);
    c || h || _ || d || i || e.value(l);
  };
}
const Ie = {
  beforeMount(t, e) {
    w.has(t) || w.set(t, []), w.get(t).push({
      documentHandler: F(t, e),
      bindingFn: e.value
    });
  },
  updated(t, e) {
    w.has(t) || w.set(t, []);
    const n = w.get(t), o = n.findIndex(
      (c) => c.bindingFn === e.oldValue
    ), l = {
      documentHandler: F(t, e),
      bindingFn: e.value
    };
    o >= 0 ? n.splice(o, 1, l) : n.push(l);
  },
  unmounted(t) {
    w.delete(t);
  }
}, Be = p({
  props: {
    columns: {
      type: Array,
      required: !0
    },
    /** 创建带斑马纹的表格 */
    stripe: {
      type: Boolean,
      default: !0,
      required: !1
    },
    /** 是否固定表头 */
    fixedHead: {
      type: Boolean,
      default: !1,
      required: !1
    },
    data: {
      type: Array,
      required: !0
    },
    columnKey: {
      type: String,
      required: !1
    }
  },
  emits: ["sort-change"],
  setup(t, { emit: e }) {
    const n = A({
      key: "",
      order: ""
    });
    function o() {
      const d = t.columns.length;
      if (t.columns[0].fixed || t.columns[d - 1].fixed)
        return !0;
      let i = !1;
      for (let m = 0; m < d; m++)
        if (t.columns[m].fixed) {
          i = !0;
          break;
        }
      return i;
    }
    let l = o();
    function c({ sorter: d, key: i, index: m }) {
      if (d === !0) {
        let y = i, g = "";
        i === n.value.key ? n.value.order === "asc" ? g = "desc" : y = "" : g = "asc", n.value = {
          order: g,
          key: y
        }, e("sort-change", {
          key: y,
          order: g,
          index: m
        });
      }
    }
    function h() {
      const d = [];
      let i = [], m = [];
      for (let y = 0, g = t.columns.length; y < g; y++) {
        const s = t.columns[y];
        s.defaultSortOrder != null && n.value.key === "" && (n.value = {
          key: s.key || "",
          order: s.defaultSortOrder
        });
        const v = {
          class: {
            "sort-column": s.sorter === !0,
            "sort-asc": n.value.key === s.key && n.value.order === "asc",
            "sort-desc": n.value.key === s.key && n.value.order === "desc",
            "nt-fixed": s.fixed
          },
          style: {}
        };
        if (s.fixed && (s.fixed === "left" ? v.style.left = i.length === 0 ? "0" : `calc(${i.join("+")})` : v.style.right = m.length === 0 ? "0" : `calc(${m.join("+")})`), s.width) {
          let a = s.width;
          typeof s.width == "number" && (a = `${s.width}px`), v.style.width = a, s.fixed != null && (s.fixed === "left" ? i.push(a) : m.push(a));
        }
        s.sorter === !0 && (v.onClick = () => {
          c({
            key: s.key || "",
            index: y,
            order: "asc",
            sorter: s.sorter
          });
        }), d.push(
          u("th", v, [
            u("span", s.title),
            s.sorter === !0 ? u("span", { class: "caret-wrapper" }, [
              u("span", { class: "sort-caret ascending" }),
              u("span", { class: "sort-caret descending" })
            ]) : null
          ])
        );
      }
      return d;
    }
    function _() {
      const d = [];
      for (let i = 0, m = t.data.length; i < m; i++) {
        const y = t.data[i];
        let g = [], s = [];
        const v = [];
        for (const a of t.columns) {
          const B = {
            style: {},
            class: {
              "nt-fixed": a.fixed
            }
          };
          if (a.fixed && (a.fixed === "left" ? B.style.left = g.length === 0 ? "0" : `${g.join("+")}` : B.style.right = s.length === 0 ? "0" : `${g.join("+")}`), a.width) {
            let L = a.width;
            typeof a.width == "number" && (L = `${a.width}px`), B.style.width = L, a.fixed != null && (a.fixed === "left" ? g.push(L) : s.push(L));
          }
          a.render != null ? v.push(u("td", B, a.render(y, i))) : a.key != null ? v.push(u("td", B, y[a.key])) : v.push(u("td", B, ""));
        }
        d.push(u("tr", v));
      }
      return d;
    }
    return () => u(
      "table",
      {
        class: [
          "nt-table",
          t.stripe ? "nt-table-stripe" : "",
          l ? "nt-table-fixed" : ""
        ]
      },
      [
        u(
          "thead",
          u(
            "tr",
            {
              class: {
                "nt-fixed": t.fixedHead
              },
              style: {
                top: t.fixedHead ? "0" : void 0
              }
            },
            h()
          )
        ),
        u(
          "tbody",
          t.data.length === 0 ? u(
            "td",
            {
              class: "ph-table__none-col",
              colspan: t.columns.length
            },
            "暂无数据记录!"
          ) : _()
        )
      ]
    );
  }
}), Y = ["xlink:href"], ze = /* @__PURE__ */ p({
  __name: "FontIcon",
  props: {
    name: {}
  },
  setup(t) {
    return (e, n) => (r(), k(b, { "use-link": "" }, {
      default: C(() => [
        f("use", {
          "xlink:href": `#${e.name}`
        }, null, 8, Y)
      ]),
      _: 1
    }));
  }
}), Z = /* @__PURE__ */ f("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor"
}, null, -1), ee = /* @__PURE__ */ p({
  __name: "LoadingIcon",
  setup(t) {
    return (e, n) => (r(), k(b, null, {
      default: C(() => [
        Z
      ]),
      _: 1
    }));
  }
}), te = ["disabled", "type"], Le = /* @__PURE__ */ p({
  __name: "Button",
  props: {
    type: { default: "normal" },
    disabled: { type: Boolean, default: !1 },
    htmlType: { default: "button" },
    block: { type: Boolean, default: !1 },
    circle: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    loadingText: { default: "加载中……" },
    loading: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, n) => (r(), $("button", {
      class: T([
        "nt-btn",
        e.type ? "nt-btn-" + e.type : "",
        e.block ? "nt-btn-block" : "",
        e.round ? "nt-btn-round" : "",
        e.circle ? "nt-btn-circle" : "",
        e.loading ? "nt-btn-loading" : ""
      ]),
      disabled: e.disabled || e.loading,
      type: e.htmlType
    }, [
      e.loading ? (r(), $(W, { key: 0 }, [
        V(ee, { class: "nt-rotate-anim" }),
        f("span", null, z(e.loadingText), 1)
      ], 64)) : x(e.$slots, "default", { key: 1 })
    ], 10, te));
  }
}), ne = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 110 896.064A448 448 0 01512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 01-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 017.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), se = /* @__PURE__ */ p({
  __name: "InfoIcon",
  setup(t) {
    return (e, n) => (r(), k(b, null, {
      default: C(() => [
        ne
      ]),
      _: 1
    }));
  }
}), oe = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M512 1024C229.234 1024 0 794.766 0 512S229.234 0 512 0s512 229.234 512 512-229.234 512-512 512z m-64.853-734.52l19.484 244.906 1.309 16.156c1.251 15.93 15.018 28.644 30.72 28.644h25.571c15.56 0 29.298-12.601 30.663-28.132l1.422-16.668 21.334-244.907c3.214-36.978-24.434-66.844-61.725-66.844h-6.627c-37.462 0-65.138 29.923-62.18 66.844zM512 801.393a66.788 66.788 0 1 0 0-133.575 66.788 66.788 0 0 0 0 133.575z"
}, null, -1), le = /* @__PURE__ */ p({
  __name: "WarnIcon",
  setup(t) {
    return (e, n) => (r(), k(b, null, {
      default: C(() => [
        oe
      ]),
      _: 1
    }));
  }
}), re = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M511.360799 0C229.345318 0 0.681814 228.663504 0.681814 510.678985c0 282.015481 228.663504 510.678985 510.678985 510.678985s510.678985-228.663504 510.678985-510.678985C1022.039784 228.663504 793.37628 0 511.360799 0zM720.336912 690.251852c13.465834 13.465834 13.551061 35.283895 0.340907 48.579276L711.047191 748.461756C697.75181 761.757137 676.104203 761.586683 662.723596 748.120849L511.275572 596.076238 359.401415 747.268581c-13.465834 13.465834-35.283895 13.551061-48.579276 0.340907L301.191511 737.97886C287.89613 724.683479 287.981357 703.035872 301.532418 689.655264l152.044611-151.448023L302.384686 386.333084c-13.465834-13.465834-13.551061-35.283895-0.340907-48.579276l9.630628-9.630628C324.969788 314.827799 346.617395 314.998252 359.998002 328.464087l151.448023 152.044611 151.788931-151.192343c13.465834-13.465834 35.283895-13.551061 48.579276-0.340907l9.630628 9.630628c13.295381 13.295381 13.210154 34.857761-0.340907 48.323596L569.144569 538.377695 720.336912 690.251852z"
}, null, -1), ae = /* @__PURE__ */ p({
  __name: "ErrorIcon",
  setup(t) {
    return (e, n) => (r(), k(b, null, {
      default: C(() => [
        re
      ]),
      _: 1
    }));
  }
}), ce = /* @__PURE__ */ f("path", {
  fill: "currentColor",
  d: "M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m307.2 368.64L467.626667 730.453333c0 3.413333-3.413333 3.413333-3.413334 6.826667-13.653333 13.653333-37.546667 13.653333-51.2 0l-177.493333-177.493333c-13.653333-13.653333-13.653333-37.546667 0-51.2 13.653333-13.653333 37.546667-13.653333 51.2 0l150.186667 153.6 334.506666-341.333334c13.653333-13.653333 37.546667-13.653333 51.2 0 10.24 10.24 10.24 34.133333-3.413333 47.786667z m0 0"
}, null, -1), ie = /* @__PURE__ */ p({
  __name: "SuccessIcon",
  setup(t) {
    return (e, n) => (r(), k(b, null, {
      default: C(() => [
        ce
      ]),
      _: 1
    }));
  }
}), de = ["id"], ue = { class: "nt-message-content" }, fe = /* @__PURE__ */ p({
  __name: "index",
  props: {
    onClose: {},
    duration: { default: 3e3 },
    type: { default: "info" },
    customClass: { default: "" },
    zindex: { default: 1e3 },
    offset: { default: 20 },
    message: {},
    id: {},
    width: { default: "" }
  },
  emits: ["destroy"],
  setup(t, { expose: e }) {
    const n = t, o = A(!1), l = H(() => ({
      top: `${n.offset}px`,
      zIndex: n.zindex,
      width: n.width === "" ? void 0 : n.width
    })), c = H(() => n.type === "success" ? ie : n.type === "warn" ? le : n.type === "error" ? ae : se);
    function h() {
      o.value = !1;
    }
    return e({
      close: h
    }), q(() => {
      o.value = !0, n.duration > 0 && setTimeout(() => {
        o.value = !1;
      }, n.duration);
    }), (_, d) => (r(), k(D, {
      name: "nt-message-fade",
      appear: "",
      onBeforeLeave: _.onClose,
      onAfterLeave: d[0] || (d[0] = (i) => _.$emit("destroy"))
    }, {
      default: C(() => [
        j(f("div", {
          id: _.id,
          style: N(l.value),
          class: T(["nt-message", `nt-message-${_.type}`, _.customClass])
        }, [
          f("div", null, [
            (r(), k(O(c.value), { class: "nt-message-icon" })),
            f("span", ue, z(_.message), 1)
          ])
        ], 14, de), [
          [K, o.value]
        ])
      ]),
      _: 1
    }, 8, ["onBeforeLeave"]));
  }
}), pe = ["info", "success", "error", "warn", "show"], I = [];
let he = 0;
function _e(t) {
  const e = I.findIndex((c) => c.component != null && c.component.props.id === t);
  if (e === -1)
    return;
  const n = I.splice(e, 1)[0];
  if (n == null)
    return;
  let o = 15;
  n.el != null && (o = n.el.offsetHeight);
  const l = I.length;
  if (l !== 0)
    for (let c = e; c < l; c++) {
      const h = I[c];
      if (h.el != null && h.component != null) {
        const _ = parseInt(h.el.style.top, 10) - o - 15;
        h.component.props.offset = _;
      }
    }
}
const M = (t) => {
  let e = document.createElement("div"), n = 15;
  for (const h of I)
    h.el != null && (n += h.el.offsetHeight + 15);
  const o = `message${++he}`, l = typeof t == "string" ? { message: t } : t;
  l.id = o, l.offset = n, l.onClose = () => {
    _e(o);
  }, l.onDestroy = () => {
    S(null, e), e = null;
  };
  const c = u(fe, l);
  return S(c, e), I.push(c), document.body.appendChild(e.firstElementChild), o;
};
for (const t of pe)
  M[t] = (e) => {
    const n = typeof e == "string" ? { message: e } : e;
    return n.type = t, n.type === "show" && (n.type = "info"), M(n);
  };
M.close = (t) => {
  const e = I.find((n) => n.component != null && n.component.props.id === t);
  e != null && e.component.exposed.close();
};
const me = { class: "nt-card" }, ye = {
  key: 0,
  class: "nt-card__header"
}, ge = { key: 0 }, ve = {
  key: 1,
  class: "nt-card__footer"
}, $e = { key: 0 }, Te = /* @__PURE__ */ p({
  __name: "Card",
  props: {
    headerText: {},
    showHeader: { type: Boolean, default: !0 },
    footerText: {},
    showFooter: { type: Boolean, default: !1 },
    bodyClass: {}
  },
  setup(t) {
    return (e, n) => (r(), $("div", me, [
      e.showHeader ? (r(), $("div", ye, [
        e.headerText ? (r(), $("span", ge, z(e.headerText), 1)) : x(e.$slots, "header", { key: 1 }),
        f("div", null, [
          x(e.$slots, "header-extra")
        ])
      ])) : E("", !0),
      f("div", {
        class: T(["nt-card__body", e.bodyClass || ""])
      }, [
        x(e.$slots, "default")
      ], 2),
      e.showFooter ? (r(), $("div", ve, [
        e.footerText ? (r(), $("span", $e, z(e.footerText), 1)) : x(e.$slots, "footer", { key: 1 })
      ])) : E("", !0)
    ]));
  }
}), ke = { class: "nt-tooltip-text" }, Me = /* @__PURE__ */ p({
  __name: "Tooltip",
  props: {
    title: {},
    placement: { default: "top" }
  },
  setup(t) {
    return (e, n) => (r(), $("div", {
      class: T({
        "nt-tooltip": !0,
        "nt-tooltip-top": e.placement.startsWith("top"),
        "nt-tooltip-bottom": e.placement.startsWith("bottom"),
        "nt-tooltip-start": e.placement.endsWith("Start"),
        "nt-tooltip-end": e.placement.endsWith("End")
      })
    }, [
      x(e.$slots, "default"),
      f("div", ke, [
        x(e.$slots, "title", {}, () => [
          R(z(e.title), 1)
        ])
      ])
    ], 2));
  }
});
export {
  b as BaseIcon,
  Le as Button,
  Te as Card,
  ae as ErrorIcon,
  ze as FontIcon,
  se as InfoIcon,
  be as Input,
  ee as LoadingIcon,
  we as MaskCloseIcon,
  M as Message,
  xe as SearchIcon,
  ie as SuccessIcon,
  Be as Table,
  Me as Tooltip,
  le as WarnIcon,
  Ie as vClickoutside
};
