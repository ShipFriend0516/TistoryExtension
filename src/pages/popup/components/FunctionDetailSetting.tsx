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
  ];

  return (
    <div className="funcDetailSetting">
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
