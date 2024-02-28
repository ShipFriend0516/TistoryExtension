import '@pages/sidepanel/SidePanel.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import React, { useState } from 'react';

const SidePanel = () => {
  const [html, setHTML] = useState<string[]>([]);

  chrome.runtime.onMessage.addListener(message => {
    console.log(message);

    setHTML(parseHTMLToString(message.options.data));
  });

  function parseHTMLToString(htmlString: string) {
    // HTML 문자열을 파싱하여 DOM 객체 생성
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    console.log(doc.body.children);

    const htmlArray = [];
    for (const i of doc.body.children) {
      htmlArray.push(i.outerHTML);
    }

    return htmlArray;
  }
  return (
    <div className="sidePanel">
      <h1>HTML 사이드바</h1>

      {html.map((element, i) => (
        <pre key={i}>
          <span>{i + 1}</span>
          {element}
        </pre>
      ))}
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
