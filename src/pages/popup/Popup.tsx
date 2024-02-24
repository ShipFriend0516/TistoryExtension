import React, { useState } from 'react';
import '@pages/popup/Popup.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import FuncList from './components/FuncList';
import FunctionDetailSetting from './components/FunctionDetailSetting';

const Popup = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabList = ['기능 목록', '기능 세부 설정', '크레딧'];

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
      {selectedTab === 0 && <FuncList />}
      {selectedTab === 1 && <FunctionDetailSetting />}
    </main>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
