async function keyMapping() {
  console.log('단축키 스크립트가 정상적으로 로드되었습니다.');

  const result = await chrome.storage.local.get('func_0');
  if (typeof result.func_0 === 'boolean') {
    if (!result.func_0) {
      console.log('단축키 기능이 비활성화 되어있습니다.');
      return;
    } else {
      console.log('단축키 기능이 활성화 되어있습니다.');
    }
  }

  const post = document.getElementById('editor-tistory_ifr') as HTMLIFrameElement;
  const editor = (document.getElementById('editor-tistory_ifr') as HTMLIFrameElement).contentDocument.getElementById(
    'tinymce',
  );

  function handleKeyDown(event: KeyboardEvent) {
    // 원하는 단축키 조합을 확인합니다. (예: Ctrl + Shift + S)
    if (event.metaKey && event.shiftKey) {
      if (event.code === 'KeyS') {
        event.preventDefault();
        // 클릭하고자 하는 버튼의 선택자를 사용하여 버튼 요소를 찾습니다.
        const targetButton: HTMLInputElement = document.querySelector('#publish-layer-btn');

        // 버튼이 존재하는 경우 클릭 이벤트를 트리거합니다.
        if (targetButton) {
          targetButton.click();
        }
      } else if (event.code === 'KeyU') {
        event.preventDefault();
        // 클릭하고자 하는 버튼의 선택자를 사용하여 버튼 요소를 찾습니다.
        const targetButton: HTMLInputElement = document.querySelector('#mceu_0-open');

        // 버튼이 존재하는 경우 클릭 이벤트를 트리거합니다.
        if (targetButton) {
          targetButton.click();
          const imageUploadButton: HTMLInputElement = document.querySelector('#attach-image');
          if (imageUploadButton) {
            imageUploadButton.click();
          }
        }
      } else if (event.code === 'KeyF') {
        event.preventDefault();
        // 클릭하고자 하는 버튼의 선택자를 사용하여 버튼 요소를 찾습니다.
        const targetButton: HTMLInputElement = document.querySelector('#more-plugin-btn-open');

        // 버튼이 존재하는 경우 클릭 이벤트를 트리거합니다.
        if (targetButton) {
          targetButton.click();
          const templateBtn: HTMLInputElement = document.querySelector('#plugin-template');
          if (templateBtn) {
            templateBtn.click();
          }
        }
      } else if (event.code === 'KeyP') {
        event.preventDefault();
        // 클릭하고자 하는 버튼의 선택자를 사용하여 버튼 요소를 찾습니다.
        const targetButton: HTMLInputElement = document.querySelector('#more-plugin-btn-open');

        // 버튼이 존재하는 경우 클릭 이벤트를 트리거합니다.
        if (targetButton) {
          targetButton.click();
          const pluginMenu: HTMLInputElement = document.querySelector(
            '.mce-tistory-plugin-item.mce-menu-item.mce-menu-item-expand.mce-menu-item-normal.mce-stack-layout-item',
          );

          if (pluginMenu) {
            pluginMenu.click();

            const prevPostPluginBtn: HTMLInputElement = document.querySelector('#plugin-prev-post');
            if (prevPostPluginBtn) {
              const postWindow = post.contentWindow;

              // 드래그한 텍스트
              const selectedText = postWindow.getSelection().toString().trim();
              console.log(selectedText);

              // 이전 포스트 검색
              prevPostPluginBtn.click();

              setTimeout(() => {
                const searchInput: HTMLInputElement = document.querySelector('#editorSearch');

                const searchBtn: HTMLInputElement = document.querySelector('.btn_search');
                if (searchInput && searchBtn) {
                  searchInput.defaultValue = selectedText;
                  searchInput.dispatchEvent(new Event('input'));
                  searchBtn.click();
                  console.log(searchInput, searchBtn);
                }
              }, 500);

              // 필요한 경우 검색 이벤트를 트리거하거나 다른 작업을 수행할 수 있습니다.
            }
          }
        }
      }
    }
  }

  document.addEventListener('keydown', handleKeyDown);
  editor.addEventListener('keydown', handleKeyDown);
}

export default keyMapping();
