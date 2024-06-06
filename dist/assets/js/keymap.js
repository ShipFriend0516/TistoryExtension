async function keyMapping() {
  console.log("단축키 스크립트가 정상적으로 로드되었습니다.");
  const result = await chrome.storage.local.get("func_0");
  if (typeof result.func_0 === "boolean") {
    if (!result.func_0) {
      console.log("단축키 기능이 비활성화 되어있습니다.");
      return;
    } else {
      console.log("단축키 기능이 활성화 되어있습니다.");
    }
  }
  const post = document.getElementById("editor-tistory_ifr").contentDocument;
  const data = await chrome.storage.local.get("template1");
  post.addEventListener("keydown", (event) => {
    if (data.template1 === "" || data.template1 === void 0) {
      alert("먼저 서식을 저장해야합니다. (확장프로그램 옵션 > 서식 저장)");
    }
    if (event.altKey && event.metaKey && event.code === "Semicolon") {
      console.log(event);
      const activeElement = post.activeElement;
      console.log("서식 단축키 입력됨!");
      if (activeElement && activeElement.isContentEditable) {
        console.log("편집 가능한 요소입니다.");
        const selection = post.getSelection();
        if (selection) {
          const range = selection.getRangeAt(0);
          const selectedNode = range.endContainer;
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.template1, "text/html");
          const elements = Array.from(doc.body.children);
          console.log(elements);
          console.log(typeof selectedNode);
          if (selectedNode) {
            console.log("커서 위치에 태그를 삽입할 수 있습니다.");
            elements.reverse().forEach((element) => selectedNode.insertAdjacentElement("afterend", element));
          } else {
            console.error("커서 위치에 태그를 삽입하지 못했습니다!");
          }
        }
      } else {
        console.error("편집 가능한 요소가 아닙니다!!");
      }
    }
    if (event.altKey && event.metaKey && event.key === "i") {
      console.log("이미지");
    }
  });
}
const keymap = keyMapping();
export {
  keymap as default
};
