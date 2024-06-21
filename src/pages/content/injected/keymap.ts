async function keyMapping() {
  const result = await chrome.storage.local.get('func_0');
  if (typeof result.func_0 === 'boolean') {
    if (!result.func_0) {
      console.log('단축키 기능이 비활성화 되어있습니다.');
      return;
    } else {
      console.log('단축키 기능이 활성화 되어있습니다.');
    }
  }

  const editor = (document.getElementById('editor-tistory_ifr') as HTMLIFrameElement).contentDocument.getElementById(
    'tinymce',
  );

  function handleKeyDown(event: KeyboardEvent) {
    // 원하는 단축키 조합을 확인합니다. (예: Ctrl + Shift + S)
    const isControlOrMetaKey = event.ctrlKey || event.metaKey;

    if (isControlOrMetaKey && event.shiftKey) {
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
              prevPostPluginBtn.click();
            }
          }
        }
      } else if (event.code === 'KeyY') {
        event.preventDefault();
        const writeModeMenu: HTMLInputElement = document.querySelector('#editor-mode-layer-btn-open');
        writeModeMenu.click();

        const editorMode = document.querySelector('#editorContainer').firstElementChild.className;
        const isNormal = editorMode === 'kakao-editor'; // 현재 에디터 이름 확인
        const normal: HTMLInputElement = document.querySelector('#editor-mode-kakao');
        const html: HTMLInputElement = document.querySelector('#editor-mode-html');

        if (isNormal) {
          html.click();
        } else {
          normal.click();
        }
      }
    }
  }

  document.addEventListener('keydown', handleKeyDown);
  editor.addEventListener('keydown', handleKeyDown);
}

export default keyMapping();
