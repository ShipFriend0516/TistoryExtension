import { r as reactExports, j as jsxRuntimeExports, a as addHmrIntoView, c as createRoot } from "../../../assets/js/_virtual_reload-on-update-in-view.js";
import { w as withErrorBoundary, a as withSuspense } from "../../../assets/js/withErrorBoundary.js";
const FuncList = () => {
  const funcList = ["추가 단축키 활성화", "이미지 대체텍스트 입력기", "이미지 사이즈 조절기"];
  const [checkedList, setCheckedList] = reactExports.useState({});
  const onClickCheckBox = (event, index) => {
    const funcKey = `func_${index}`;
    const target = event.target;
    chrome.storage.local.set({ [funcKey]: target.checked }).then(() => {
      setCheckedList((prev) => {
        return { ...prev, [funcKey]: target.checked };
      });
    });
  };
  const loadPreChecked = () => {
    const arr = funcList.map((func, i) => `func_${i}`);
    chrome.storage.local.get(arr, (result) => {
      setCheckedList(result);
    });
  };
  reactExports.useEffect(() => {
    loadPreChecked();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "funcList", children: funcList.map((func, i) => {
    const key = `func_${i}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: checkedList[key], onClick: (event) => onClickCheckBox(event, i) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: func })
    ] }, i);
  }) }) });
};
const FunctionDetailSetting = () => {
  const settings = [
    ["ALT 태그 입력 방식", ["모든 이미지", "개별 이미지"]],
    ["기존 단축키 비활성화", ["활성화", "비활성화"]],
    ["", []]
  ];
  const [textareaOpen, setTextAreaOpen] = reactExports.useState(false);
  const [template, setTemplate] = reactExports.useState("");
  const 서식저장 = () => {
    setTextAreaOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "funcDetailSetting", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: settings.map((setting, i) => {
      const key = `func_${i}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "select", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: setting[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { children: setting[1].map((option, i2) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: option }, i2);
        }) })
      ] }, key);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "keymapSetting", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "단축키" }),
      textareaOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { onChange: (e) => setTemplate(e.target.value), value: template }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: 서식저장, children: "저장" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTextAreaOpen(true), children: "서식 관리" })
    ] })
  ] });
};
const Credit = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "credit", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "크레딧" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/ShipFriend0516", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { role: "img", viewBox: "0 0 24 24", color: "white", width: 24, height: 24, xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://velog.io/@shipfriend/posts", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          width: 24,
          height: 24,
          fill: "#20C997",
          role: "img",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Velog" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" })
          ]
        }
      ) })
    ] })
  ] });
};
const Popup = () => {
  const [selectedTab, setSelectedTab] = reactExports.useState(0);
  const tabList = ["기능 목록", "기능 세부 설정", "크레딧"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "popup-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Story Helper" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "티스토리 글쓰기를 더 편하게" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tab", children: tabList.map((tab, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          setSelectedTab(i);
        },
        className: `${selectedTab === i && "selected"}`,
        children: tab
      },
      i
    )) }),
    selectedTab === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(FuncList, {}),
    selectedTab === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(FunctionDetailSetting, {}),
    selectedTab === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(Credit, {})
  ] });
};
const Popup$1 = withErrorBoundary(withSuspense(Popup, /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Loading ... " })), /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: " Error Occur " }));
addHmrIntoView("pages/popup");
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Popup$1, {}));
}
init();
