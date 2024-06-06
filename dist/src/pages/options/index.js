import { r as reactExports, j as jsxRuntimeExports, a as addHmrIntoView, c as createRoot } from "../../../assets/js/_virtual_reload-on-update-in-view.js";
const Options = () => {
  const [template1, setTemplate1] = reactExports.useState("");
  const 서식저장 = (e) => {
    e.preventDefault();
    chrome.storage.local.set({ template1 });
    console.log("template: ", template1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "설정" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "단축키" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "서식 저장" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settingOption", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "단축키 (⌥ + ⌘ + ;)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => 서식저장(e), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { onChange: (e) => setTemplate1(e.target.value), value: template1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "저장" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "이미지 넣기" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settingOption", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "단축키 (⌥ + ⌘ + i)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { onChange: (e) => setTemplate1(e.target.value), value: template1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { children: "저장" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "사이드바" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
    ] })
  ] });
};
addHmrIntoView("pages/options");
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Options, {}));
}
init();
