import { j as jsxRuntimeExports, r as reactExports, a as addHmrIntoView, c as createRoot } from "../../../assets/js/_virtual_reload-on-update-in-view.js";
import { w as withErrorBoundary, a as withSuspense } from "../../../assets/js/withErrorBoundary.js";
const SidePanel = () => {
  const [html, setHTML] = reactExports.useState([]);
  chrome.runtime.onMessage.addListener((message) => {
    console.log(message);
    setHTML(parseHTMLToString(message.options.data));
  });
  function parseHTMLToString(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    console.log(doc.body.children);
    const htmlArray = [];
    for (const i of doc.body.children) {
      htmlArray.push(i.outerHTML);
    }
    return htmlArray;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sidePanel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "HTML 사이드바" }),
    html.map((element, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: i + 1 }),
      element
    ] }, i))
  ] });
};
const SidePanel$1 = withErrorBoundary(withSuspense(SidePanel, /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Loading ... " })), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Error Occur " }));
addHmrIntoView("pages/sidepanel");
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(SidePanel$1, {}));
}
init();
