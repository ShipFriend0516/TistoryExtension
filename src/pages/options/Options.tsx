import React, { useState } from 'react';
import '@pages/options/Options.css';
import { FormEvent } from 'react/ts5.0';

const Options: React.FC = () => {
  const [template1, setTemplate1] = useState('');

  const 서식저장 = (e: FormEvent) => {
    e.preventDefault();
    chrome.storage.local.set({ template1: template1 });
    console.log('template: ', template1);
  };

  return (
    <div className="container">
      <h1>설정</h1>
      <div>
        <h3>단축키</h3>
        <hr />
        <p>서식 저장</p>
        <div className="settingOption">
          <span>단축키 (⌥ + ⌘ + ;)</span>
          <form onSubmit={e => 서식저장(e)}>
            <textarea onChange={e => setTemplate1(e.target.value)} value={template1} />
            <button>저장</button>
          </form>
        </div>
        <p>이미지 넣기</p>
        <div className="settingOption">
          <span>단축키 (⌥ + ⌘ + i)</span>

          <textarea onChange={e => setTemplate1(e.target.value)} value={template1}></textarea>
          <button>저장</button>
        </div>
      </div>
      <div>
        <h3>사이드바</h3>
        <hr />
      </div>
    </div>
  );
};

export default Options;
