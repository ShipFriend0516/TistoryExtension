import React, { useState } from 'react';
import '@pages/popup/Popup.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

const Popup = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabList = ['기능 목록', '단축키 설정', '크레딧'];
  const funcList = ['추가 단축키 활성화', '이미지 대체텍스트 입력기', '페이지 미리보기'];
  // const [checkedList, setCheckedList] = useState([]);

  const onClickCheckBox = (index: number, isChecked: boolean): void => {
    // const funcKey = `func_${index}`;
    chrome.storage.local
      .set({
        funcKey: isChecked,
      })
      .then(res => {
        console.log(res);
      });
  };
  return (
    <main className="popup-container">
      <h1>Story Helper</h1>
      <p>티스토리 글쓰기를 더 편하게</p>
      <div className="tab">
        {tabList.map((tab, i) => (
          <button
            onClick={() => {
              setSelectedTab(i);
            }}
            className={`${selectedTab === i && 'selected'}`}
            key={i}>
            {tab}
          </button>
        ))}
      </div>
      <ul className="funcList">
        {funcList.map((func, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                onChange={e => {
                  console.log('체크됨');
                  onClickCheckBox(i, e.target.checked);
                }}
              />
              <span>{func}</span>
            </li>
          );
        })}
      </ul>
      <div className="btnWrapper">
        <button>단축키 설정</button>
        <a href="https://github.com/ShipFriend0516" target="_blank" rel="noreferrer">
          <button>깃허브</button>
        </a>
      </div>
    </main>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
