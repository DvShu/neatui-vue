import { defineComponent as o, openBlock as t, createElementBlock as _, renderSlot as i, createBlock as s, withCtx as r, createElementVNode as c } from "vue";
const u = ["viewBox"], l = /* @__PURE__ */ o({
  __name: "Icon",
  props: {
    useLink: { type: Boolean, default: !1 },
    viewBox: { default: "0 0 1024 1024" }
  },
  setup(n) {
    return (e, a) => (t(), _("svg", {
      viewBox: e.useLink ? void 0 : e.viewBox,
      "aria-hidden": "true",
      class: "nt-icon"
    }, [
      i(e.$slots, "default")
    ], 8, u));
  }
}), p = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M12 23a11 11 0 100-22 11 11 0 000 22zM8.82 7.4L12 10.6l3.18-3.19 1.42 1.42L13.4 12l3.19 3.18-1.42 1.42L12 13.4 8.82 16.6 7.4 15.18 10.6 12 7.4 8.82 8.82 7.4z"
}, null, -1), h = /* @__PURE__ */ o({
  __name: "MaskCloseIcon",
  setup(n) {
    return (e, a) => (t(), s(l, { "view-box": "0 0 24 24" }, {
      default: r(() => [
        p
      ]),
      _: 1
    }));
  }
}), d = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M15.1 5.9a6.5 6.5 0 10-9.2 9.2 6.5 6.5 0 009.2-9.2zM4.49 4.5a8.5 8.5 0 0112.69 11.27l5.34 5.35-1.41 1.41-5.35-5.34A8.5 8.5 0 014.5 4.49z"
}, null, -1), m = /* @__PURE__ */ o({
  __name: "SearchIcon",
  setup(n) {
    return (e, a) => (t(), s(l, { "view-box": "0 0 24 24" }, {
      default: r(() => [
        d
      ]),
      _: 1
    }));
  }
});
export {
  l as BaseIcon,
  h as MaskCloseIcon,
  m as SearchIcon
};
