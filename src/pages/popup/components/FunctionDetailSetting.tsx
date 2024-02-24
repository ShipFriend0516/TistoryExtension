import { useState } from 'react';

const FunctionDetailSetting = () => {
  type SettingList = Array<[string, string[]]>;

  const settings: SettingList = [
    ['ALT 태그 입력 방식', ['모든 이미지', '개별 이미지']],
    ['기존 단축키 비활성화', ['활성화', '비활성화']],
    ['', []],
  ];

  const [textareaOpen, setTextAreaOpen] = useState(false);
  const [template, setTemplate] = useState('');

  const 서식저장 = () => {
    setTextAreaOpen(false);
  };

  return (
    <div className="funcDetailSetting">
      <div>
        {settings.map((setting, i) => {
          const key = `func_${i}`;
          return (
            <div className="select" key={key}>
              <span>{setting[0]}</span>
              <select>
                {setting[1].map((option, i) => {
                  return (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="keymapSetting">
        <h3>단축키</h3>
        {textareaOpen ? (
          <div>
            <textarea onChange={e => setTemplate(e.target.value)} value={template}></textarea>
            <button onClick={서식저장}>저장</button>
          </div>
        ) : (
          <button onClick={() => setTextAreaOpen(true)}>서식 관리</button>
        )}
      </div>
    </div>
  );
};

export default FunctionDetailSetting;
