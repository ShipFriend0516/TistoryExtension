/* eslint-disable jsx-a11y/no-autofocus */
import { useRef, useState, useEffect } from 'react';

interface Shortcut {
  keys: string;
  description: string;
  custom?: string;
}

const FunctionDetailSetting = () => {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([
    {
      keys: 'Ctrl + Shift + S',
      description: '글 발행',
    },
    {
      keys: 'Ctrl + Shift + U',
      description: '이미지 업로드',
    },
    {
      keys: 'Ctrl + Shift + F',
      description: '서식 창 열기',
    },
    {
      keys: 'Ctrl + Shift + P',
      description: '이전 포스트 링크',
    },
    {
      keys: 'Ctrl + Shift + Y',
      description: '에디터 변환',
    },
  ]);

  const customKeyMapRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [customizingIndex, setCustomizingIndex] = useState<number | null>(null);
  const [customKeys, setCustomKeys] = useState<string[]>([]);

  // store에서 초기값 불러오기
  const getShortcuts = async () => {
    try {
      const result = await chrome.storage.local.get('shortcuts');
      console.table(result.shortcuts);
      setShortcuts([...result.shortcuts]);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getShortcuts();
  }, []);
  // 키 조합이 변경될 때마다 실행
  useEffect(() => {
    const postShortcuts = async () => {
      try {
        const response = await chrome.storage.local.set({ shortcuts: shortcuts });
        console.log('저장결과', response);
      } catch (err) {
        console.error(err);
      }
    };
    postShortcuts();
  }, [shortcuts]);

  const startCustom = (index: number) => {
    setIsEditing(true);
    setCustomizingIndex(index);
    setCustomKeys([]);
    if (customKeyMapRef.current) {
      customKeyMapRef.current.focus();
    }
  };

  const handleCustomKeyMap = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const allowedKeys =
      /^(Key|Digit|Bracket|Comma|Period|Slash|Backslash|Semicolon|Quote|Backquote|Minus|Equal|Enter|Backspace|Tab|ShiftLeft|ShiftRight|ControlLeft|ControlRight|AltLeft|AltRight|MetaLeft|MetaRight).*$/;

    if (!allowedKeys.test(e.code)) {
      return;
    }

    const keyCode = e.code.toUpperCase();
    let key;
    if (keyCode.startsWith('KEY')) {
      key = keyCode.slice(3);
    } else if (['METALEFT', 'SHIFTLEFT', 'CONTROLLEFT', 'ALTLEFT'].includes(keyCode)) {
      key = keyCode.slice(0, -4);
    }
    if (e.ctrlKey && !customKeys.includes('Ctrl')) {
      setCustomKeys(prev => [...prev, 'Ctrl']);
    }
    if (e.metaKey && !customKeys.includes('Command')) {
      setCustomKeys(prev => [...prev, 'Command']);
    }
    if (e.shiftKey && !customKeys.includes('Shift')) {
      setCustomKeys(prev => [...prev, 'Shift']);
    }
    if (e.altKey && !customKeys.includes('Alt')) {
      setCustomKeys(prev => [...prev, 'Alt']);
    }
    if (key !== 'CONTROL' && key !== 'ALT' && key !== 'SHIFT' && key !== 'META' && !customKeys.includes(key)) {
      setCustomKeys(prev => [...prev, key]);
    }
  };

  const saveCustomKeys = () => {
    if (customizingIndex !== null) {
      const keys = customKeys.sort((a, b) => b.length - a.length).join(' + ');
      setShortcuts(prev => prev.map((s, i) => (i === customizingIndex ? { ...s, custom: keys } : s)));
    }
    setIsEditing(false);
    setCustomKeys([]);
    setCustomizingIndex(null);
  };

  const resetCustomKeys = (index: number) => {
    setShortcuts(prev => prev.map((s, i) => (i === index ? { ...s, custom: undefined } : s)));
  };

  return (
    <div className="funcDetailSetting">
      <table className="table">
        <thead>
          <tr>
            <th>단축키</th>
            <th>설명</th>
            <th>커스텀</th>
          </tr>
        </thead>
        <tbody>
          {shortcuts.map((shortcut, index) => (
            <tr key={index}>
              <td>{shortcut.custom || shortcut.keys}</td>
              <td>{shortcut.description}</td>
              <td>
                {shortcut.custom ? (
                  <button onClick={() => resetCustomKeys(index)}>초기화</button>
                ) : (
                  <button onClick={() => startCustom(index)}>수정</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div style={{ marginTop: '5px' }}>
          <div>
            <b>{shortcuts[customizingIndex!].description}</b> 단축키 수정
          </div>
          <div className="customArea">
            <div className="show">{customKeys.join(' + ')}</div>
            <input type="text" style={{ display: 'hidden' }} onKeyDown={handleCustomKeyMap} autoFocus />
            <div>
              <button onClick={saveCustomKeys}>저장</button>
              <button onClick={() => setIsEditing(false)}>취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionDetailSetting;
