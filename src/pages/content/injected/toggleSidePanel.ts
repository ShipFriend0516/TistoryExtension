// 사이드바 코드

function toggleSidePanel() {
  console.log('사이드바 스크립트가 정상적으로 로드되었습니다.');

  // 버튼 추가
  const btn = document.createElement('button');
  btn.classList.add(
    'mce-tistory-mode-item',
    'mce-menu-item',
    'mce-menu-item-normal',
    'mce-stack-layout-item',
    'mce-last',
  );
  const i = document.createElement('i');
  i.classList.add('mce-ico', 'mce-i-none');
  btn.appendChild(i);

  const btnSpan = document.createElement('span');
  btnSpan.classList.add('mce-text');
  btnSpan.innerHTML = '&nbsp;같이보기';
  btn.appendChild(btnSpan);

  interface TargetNode extends HTMLElement {
    childNodes: NodeListOf<HTMLElement>;
  }

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(node => {
          if (isTargetNode(node)) {
            const firstChild = node.childNodes[0];
            if (isTargetNode(firstChild)) {
              const secondChild = firstChild.childNodes[0];
              if (firstChild.childNodes.length === 3 && secondChild.id === 'editor-mode-kakao') {
                firstChild.appendChild(btn);
              }
            }
          }
        });
      }
    });
  });

  // 문서 전체의 변화를 감지
  observer.observe(document.body, { childList: true, subtree: true });

  // TargetNode 인터페이스에 대한 유틸리티 함수
  function isTargetNode(node: Node): node is TargetNode {
    try {
      return (node as TargetNode).childNodes !== undefined;
    } catch (err) {
      return false;
    }
  }
}

export default toggleSidePanel();

/**
 * <div id="editor-mode-kakao"
 * class="mce-tistory-mode-item mce-menu-active mce-menu-item mce-menu-item-normal mce-stack-layout-item mce-first" tabindex="-1" role="menuitem" aria-checked="false">
 * <i class="mce-ico mce-i-none"></i>&nbsp;
 * <span id="editor-mode-kakao-text" class="mce-text">
 * 기본모드
 * </span>
 * </div>
 */
