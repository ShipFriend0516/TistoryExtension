function func() {
  console.log('컨텐츠 스크립트가 정상적으로 로드되었습니다.');

  const menu = document.body.querySelector('#mceu_18');
  console.log(menu);
  const altTager = document.createElement('div');
  altTager.classList.add('mce-widget', 'mce-btn', 'mce-menubtn', 'mce-fixed-width');

  const button = document.createElement('button');
  altTager.appendChild(button);

  button.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-400q0-33 23.5-56.5T200-680h160v80H200v400h560v-400H600v-80h160q33 0 56.5 23.5T840-600v400q0 33-23.5 56.5T760-120H200Zm280-200L320-480l56-56 64 63v-487h80v487l64-63 56 56-160 160Z"/></svg>';
  menu.insertAdjacentElement('afterend', altTager);

  altTager.addEventListener('click', () => {
    const userInput = window.prompt('텍스트를 입력하세요:', '');

    if (userInput !== null) {
      // 사용자가 확인 버튼을 눌렀을 때의 로직
      console.log('본문의 Alt 태그를 모두 수정합니다:', userInput);

      const post: Document = (document.getElementById('editor-tistory_ifr') as HTMLIFrameElement).contentDocument;
      const imgs: HTMLImageElement[] = Array.from(post.body.getElementsByTagName('img'));
      console.log(imgs);
      imgs.forEach(img => (img.alt = userInput));
    } else {
      // 사용자가 취소 버튼을 눌렀거나 창을 닫았을 때의 로직
      console.log('사용자가 입력을 취소했습니다.');
    }
  });
}

export default func();
