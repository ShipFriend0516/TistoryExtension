const FunctionDetailSetting = () => {
  const shortcuts = [
    {
      keys: 'Ctrl + Shift + S',
      description: '글을 발행',
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
      description: '에디터 변환 기본/HTML',
    },
  ];

  return (
    <div className="funcDetailSetting">
      <h2>단축키 설명</h2>
      <p>추가 기능은 툴바에 추가됩니다.</p>
      <h2>단축키 설명</h2>
      <table className="table">
        <thead>
          <tr>
            <th>단축키</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          {shortcuts.map((shortcut, index) => (
            <tr key={index}>
              <td>{shortcut.keys}</td>
              <td>{shortcut.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FunctionDetailSetting;
