const FunctionDetailSetting = () => {
  type SettingList = Array<[string, string[]]>;

  const settings: SettingList = [
    ['ALT 태그 입력 방식', ['모든 이미지', '개별 이미지']],
    ['기존 단축키 비활성화', ['활성화', '비활성화']],
    ['', []],
  ];

  return (
    <div>
      <div className="funcDetailSetting">
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
    </div>
  );
};

export default FunctionDetailSetting;
