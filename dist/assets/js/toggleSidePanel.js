async function toggleSidePanel() {
  console.log("사이드바 스크립트가 정상적으로 로드되었습니다.");
  const result = await chrome.storage.local.get("func_2");
  if (typeof result.func_2 === "boolean") {
    if (!result.func_2) {
      console.log("사이드바 기능이 비활성화 되어있습니다.");
      return;
    } else {
      console.log("사이드바 기능이 활성화 되어있습니다.");
    }
  }
  const btn = document.createElement("button");
  btn.classList.add(
    "mce-tistory-mode-item",
    "mce-menu-item",
    "mce-menu-item-normal",
    "mce-stack-layout-item",
    "mce-last"
  );
  const i = document.createElement("i");
  i.classList.add("mce-ico", "mce-i-none");
  btn.appendChild(i);
  const btnSpan = document.createElement("span");
  btnSpan.classList.add("mce-text");
  btnSpan.innerHTML = "&nbsp;같이보기";
  btn.appendChild(btnSpan);
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach((node) => {
          if (isTargetNode(node)) {
            const firstChild = node.childNodes[0];
            if (isTargetNode(firstChild)) {
              const secondChild = firstChild.childNodes[0];
              if (firstChild.childNodes.length === 3 && secondChild.id === "editor-mode-kakao") {
                firstChild.appendChild(btn);
              }
            }
          }
        });
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
  async function sendPageBody() {
    const post = document.getElementById("editor-tistory_ifr").contentDocument;
    console.log(post.body);
    await chrome.runtime.sendMessage({
      action: "sendPageBody",
      options: { data: post.body.innerHTML }
    });
  }
  setInterval(() => {
    sendPageBody();
  }, 2e4);
  function isTargetNode(node) {
    try {
      return node.childNodes !== void 0;
    } catch (err) {
      return false;
    }
  }
}
const toggleSidePanel$1 = toggleSidePanel();
export {
  toggleSidePanel$1 as default
};
