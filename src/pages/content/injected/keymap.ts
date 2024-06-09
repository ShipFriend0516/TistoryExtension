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

  const post = (document.getElementById('editor-tistory_ifr') as HTMLIFrameElement).contentDocument.getElementById(
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
      }
    }
  }

  document.addEventListener('keydown', handleKeyDown);
  post.addEventListener('keydown', handleKeyDown);
}

export default keyMapping();
