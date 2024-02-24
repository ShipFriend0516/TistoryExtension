/**
 * DO NOT USE import someModule from '...';
 *
 * @issue-url https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/issues/160
 *
 * Chrome extensions don't support modules in content scripts.
 * If you want to use other modules in content scripts, you need to import them via these files.
 *
 */

import('@pages/content/injected/altTager');
import('@pages/content/injected/keymap');
// const script = document.createElement('script');
// script.src = chrome.runtime.getURL('src/pages/injected/index.js');
// (document.head || document.documentElement).appendChild(script);
// script.onload = function () {
//   script.remove();
// };

console.log('index.ts 로드 완료');
