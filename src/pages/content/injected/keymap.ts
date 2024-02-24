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

  const post: Document = (document.getElementById('editor-tistory_ifr') as HTMLIFrameElement).contentDocument;
  console.log(post.body);

  const data = await chrome.storage.local.get('template1');
  console.log(data);

  post.addEventListener('keydown', (event: KeyboardEvent) => {
    if (data.template1 === '' || data.template1 === undefined) {
      alert('먼저 서식을 저장해야합니다. (확장프로그램 옵션 > 서식 저장)');
    }

    if (event.altKey && event.metaKey && event.code === 'Semicolon') {
      console.log(event);
      const activeElement = post.activeElement as HTMLElement;
      console.log('서식 단축키 입력됨!');

      if (activeElement && activeElement.isContentEditable) {
        console.log('편집 가능한 요소입니다.');
        const selection = post.getSelection();

        if (selection) {
          const range = selection.getRangeAt(0);
          const selectedNode = range.endContainer;

          // 문자열을 HTML로 파싱하여 DOM 요소로 변환
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.template1, 'text/html');
          const elements = Array.from(doc.body.children);

          console.log(elements);
          console.log(typeof selectedNode);
          // 커서 위치에 HTML을 삽입합니다.
          if (selectedNode) {
            console.log('커서 위치에 태그를 삽입할 수 있습니다.');

            elements.reverse().forEach(element => (selectedNode as Element).insertAdjacentElement('afterend', element));
            // selectedNode.insertAdjacentHTML('afterend', data.template1);
          } else {
            console.error('커서 위치에 태그를 삽입하지 못했습니다!');
          }
        }
      } else {
        console.error('편집 가능한 요소가 아닙니다!!');
      }
    }

    if (event.altKey && event.metaKey && event.key === 'i') {
      // Ctrl + Enter가 눌렸을 때의 동작
      console.log('이미지');
    }
  });
}

export default keyMapping();
