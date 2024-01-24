import { defineComponent as c, openBlock as a, createElementBlock as y, renderSlot as z, createBlock as d, withCtx as f, createElementVNode as r, normalizeClass as B, Fragment as w, createVNode as L, toDisplayString as k, ref as b, computed as $, onMounted as M, Transition as x, withDirectives as E, normalizeStyle as S, resolveDynamicComponent as T, vShow as H, render as C, h as F } from "vue";
const A = ["viewBox"], _ = /* @__PURE__ */ c({
  __name: "Icon",
  props: {
    useLink: { type: Boolean, default: !1 },
    viewBox: { default: "0 0 1024 1024" }
  },
  setup(t) {
    return (e, n) => (a(), y("svg", {
      viewBox: e.useLink ? void 0 : e.viewBox,
      "aria-hidden": "true",
      class: "nt-icon"
    }, [
      z(e.$slots, "default")
    ], 8, A));
  }
}), D = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M12 23a11 11 0 100-22 11 11 0 000 22zM8.82 7.4L12 10.6l3.18-3.19 1.42 1.42L13.4 12l3.19 3.18-1.42 1.42L12 13.4 8.82 16.6 7.4 15.18 10.6 12 7.4 8.82 8.82 7.4z"
}, null, -1), ie = /* @__PURE__ */ c({
  __name: "MaskCloseIcon",
  setup(t) {
    return (e, n) => (a(), d(_, { "view-box": "0 0 24 24" }, {
      default: f(() => [
        D
      ]),
      _: 1
    }));
  }
}), V = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M15.1 5.9a6.5 6.5 0 10-9.2 9.2 6.5 6.5 0 009.2-9.2zM4.49 4.5a8.5 8.5 0 0112.69 11.27l5.34 5.35-1.41 1.41-5.35-5.34A8.5 8.5 0 014.5 4.49z"
}, null, -1), de = /* @__PURE__ */ c({
  __name: "SearchIcon",
  setup(t) {
    return (e, n) => (a(), d(_, { "view-box": "0 0 24 24" }, {
      default: f(() => [
        V
      ]),
      _: 1
    }));
  }
}), N = ["type", "placeholder"], fe = /* @__PURE__ */ c({
  __name: "Input",
  props: {
    htmlType: { default: "text" },
    placeholder: { default: "" }
  },
  setup(t) {
    return (e, n) => (a(), y("input", {
      type: e.htmlType,
      class: "nt-input",
      placeholder: e.placeholder
    }, null, 8, N));
  }
});
function O(t) {
  return t instanceof Element;
}
function W(t, e) {
  let n = !1;
  return t.length && (n = t.some((s) => s == null ? !1 : s.contains(e)), n || (n = t.includes(e))), n;
}
const p = /* @__PURE__ */ new Map();
document.addEventListener(
  "click",
  (t) => {
    for (const e of p.values())
      for (const { documentHandler: n } of e)
        n(t);
  },
  !0
);
function I(t, e) {
  let n = [];
  return Array.isArray(e.arg) ? n = e.arg : O(e.arg) && n.push(e.arg), (s) => {
    const o = s.target, l = !e || !e.instance, u = !o, i = t.contains(o), h = t === o, g = W(n, o);
    l || u || i || h || g || e.value(o);
  };
}
const pe = {
  beforeMount(t, e) {
    p.has(t) || p.set(t, []), p.get(t).push({
      documentHandler: I(t, e),
      bindingFn: e.value
    });
  },
  updated(t, e) {
    p.has(t) || p.set(t, []);
    const n = p.get(t), s = n.findIndex(
      (l) => l.bindingFn === e.oldValue
    ), o = {
      documentHandler: I(t, e),
      bindingFn: e.value
    };
    s >= 0 ? n.splice(s, 1, o) : n.push(o);
  },
  unmounted(t) {
    p.delete(t);
  }
}, j = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, o] of e)
    n[s] = o;
  return n;
}, q = {};
function G(t, e) {
  return null;
}
const _e = /* @__PURE__ */ j(q, [["render", G]]), J = ["xlink:href"], me = /* @__PURE__ */ c({
  __name: "FontIcon",
  props: {
    name: {}
  },
  setup(t) {
    return (e, n) => (a(), d(_, { "use-link": "" }, {
      default: f(() => [
        r("use", {
          "xlink:href": `#${e.name}`
        }, null, 8, J)
      ]),
      _: 1
    }));
  }
}), K = /* @__PURE__ */ r("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor"
}, null, -1), P = /* @__PURE__ */ c({
  __name: "LoadingIcon",
  setup(t) {
    return (e, n) => (a(), d(_, null, {
      default: f(() => [
        K
      ]),
      _: 1
    }));
  }
}), Q = ["disabled", "type"], he = /* @__PURE__ */ c({
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
    return (e, n) => (a(), y("button", {
      class: B([
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
      e.loading ? (a(), y(w, { key: 0 }, [
        L(P, { class: "nt-rotate-anim" }),
        r("span", null, k(e.loadingText), 1)
      ], 64)) : z(e.$slots, "default", { key: 1 })
    ], 10, Q));
  }
}), R = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 110 896.064A448 448 0 01512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 01-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 017.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), U = /* @__PURE__ */ c({
  __name: "InfoIcon",
  setup(t) {
    return (e, n) => (a(), d(_, null, {
      default: f(() => [
        R
      ]),
      _: 1
    }));
  }
}), X = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 1024C229.234 1024 0 794.766 0 512S229.234 0 512 0s512 229.234 512 512-229.234 512-512 512z m-64.853-734.52l19.484 244.906 1.309 16.156c1.251 15.93 15.018 28.644 30.72 28.644h25.571c15.56 0 29.298-12.601 30.663-28.132l1.422-16.668 21.334-244.907c3.214-36.978-24.434-66.844-61.725-66.844h-6.627c-37.462 0-65.138 29.923-62.18 66.844zM512 801.393a66.788 66.788 0 1 0 0-133.575 66.788 66.788 0 0 0 0 133.575z"
}, null, -1), Y = /* @__PURE__ */ c({
  __name: "WarnIcon",
  setup(t) {
    return (e, n) => (a(), d(_, null, {
      default: f(() => [
        X
      ]),
      _: 1
    }));
  }
}), Z = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M511.360799 0C229.345318 0 0.681814 228.663504 0.681814 510.678985c0 282.015481 228.663504 510.678985 510.678985 510.678985s510.678985-228.663504 510.678985-510.678985C1022.039784 228.663504 793.37628 0 511.360799 0zM720.336912 690.251852c13.465834 13.465834 13.551061 35.283895 0.340907 48.579276L711.047191 748.461756C697.75181 761.757137 676.104203 761.586683 662.723596 748.120849L511.275572 596.076238 359.401415 747.268581c-13.465834 13.465834-35.283895 13.551061-48.579276 0.340907L301.191511 737.97886C287.89613 724.683479 287.981357 703.035872 301.532418 689.655264l152.044611-151.448023L302.384686 386.333084c-13.465834-13.465834-13.551061-35.283895-0.340907-48.579276l9.630628-9.630628C324.969788 314.827799 346.617395 314.998252 359.998002 328.464087l151.448023 152.044611 151.788931-151.192343c13.465834-13.465834 35.283895-13.551061 48.579276-0.340907l9.630628 9.630628c13.295381 13.295381 13.210154 34.857761-0.340907 48.323596L569.144569 538.377695 720.336912 690.251852z"
}, null, -1), ee = /* @__PURE__ */ c({
  __name: "ErrorIcon",
  setup(t) {
    return (e, n) => (a(), d(_, null, {
      default: f(() => [
        Z
      ]),
      _: 1
    }));
  }
}), ne = /* @__PURE__ */ r("path", {
  fill: "currentColor",
  d: "M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m307.2 368.64L467.626667 730.453333c0 3.413333-3.413333 3.413333-3.413334 6.826667-13.653333 13.653333-37.546667 13.653333-51.2 0l-177.493333-177.493333c-13.653333-13.653333-13.653333-37.546667 0-51.2 13.653333-13.653333 37.546667-13.653333 51.2 0l150.186667 153.6 334.506666-341.333334c13.653333-13.653333 37.546667-13.653333 51.2 0 10.24 10.24 10.24 34.133333-3.413333 47.786667z m0 0"
}, null, -1), te = /* @__PURE__ */ c({
  __name: "SuccessIcon",
  setup(t) {
    return (e, n) => (a(), d(_, null, {
      default: f(() => [
        ne
      ]),
      _: 1
    }));
  }
}), se = ["id"], oe = { class: "nt-message-content" }, le = /* @__PURE__ */ c({
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
    const n = t, s = b(!1), o = $(() => ({
      top: `${n.offset}px`,
      zIndex: n.zindex,
      width: n.width === "" ? void 0 : n.width
    })), l = $(() => n.type === "success" ? te : n.type === "warn" ? Y : n.type === "error" ? ee : U);
    function u() {
      s.value = !1;
    }
    return e({
      close: u
    }), M(() => {
      s.value = !0, n.duration > 0 && setTimeout(() => {
        s.value = !1;
      }, n.duration);
    }), (i, h) => (a(), d(x, {
      name: "nt-message-fade",
      appear: "",
      onBeforeLeave: i.onClose,
      onAfterLeave: h[0] || (h[0] = (g) => i.$emit("destroy"))
    }, {
      default: f(() => [
        E(r("div", {
          id: i.id,
          style: S(o.value),
          class: B(["nt-message", `nt-message-${i.type}`, i.customClass])
        }, [
          r("div", null, [
            (a(), d(T(l.value), { class: "nt-message-icon" })),
            r("span", oe, k(i.message), 1)
          ])
        ], 14, se), [
          [H, s.value]
        ])
      ]),
      _: 1
    }, 8, ["onBeforeLeave"]));
  }
}), ae = ["info", "success", "error", "warn", "show"], m = [];
let re = 0;
function ce(t) {
  const e = m.findIndex((l) => l.component != null && l.component.props.id === t);
  if (e === -1)
    return;
  const n = m.splice(e, 1)[0];
  if (n == null)
    return;
  let s = 15;
  n.el != null && (s = n.el.offsetHeight);
  const o = m.length;
  if (o !== 0)
    for (let l = e; l < o; l++) {
      const u = m[l];
      if (u.el != null && u.component != null) {
        const i = parseInt(u.el.style.top, 10) - s - 15;
        u.component.props.offset = i;
      }
    }
}
const v = (t) => {
  let e = document.createElement("div"), n = 15;
  for (const u of m)
    u.el != null && (n += u.el.offsetHeight + 15);
  const s = `message${++re}`, o = typeof t == "string" ? { message: t } : t;
  o.id = s, o.offset = n, o.onClose = () => {
    ce(s);
  }, o.onDestroy = () => {
    C(null, e), e = null;
  };
  const l = F(le, o);
  return C(l, e), m.push(l), document.body.appendChild(e.firstElementChild), s;
};
for (const t of ae)
  v[t] = (e) => {
    const n = typeof e == "string" ? { message: e } : e;
    return n.type = t, n.type === "show" && (n.type = "info"), v(n);
  };
v.close = (t) => {
  const e = m.find((n) => n.component != null && n.component.props.id === t);
  e != null && e.component.exposed.close();
};
export {
  _ as BaseIcon,
  he as Button,
  ee as ErrorIcon,
  me as FontIcon,
  U as InfoIcon,
  fe as Input,
  P as LoadingIcon,
  ie as MaskCloseIcon,
  v as Message,
  de as SearchIcon,
  te as SuccessIcon,
  _e as Table,
  Y as WarnIcon,
  pe as vClickoutside
};
