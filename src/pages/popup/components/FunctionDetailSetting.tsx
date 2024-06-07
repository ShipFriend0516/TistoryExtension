const FunctionDetailSetting = () => {
  // type SettingList = Array<[string, string[]]>;

  // const settings: SettingList = [
  //   ['ALT 태그 입력 방식', ['모든 이미지', '개별 이미지']],
  //   ['', []],
  // ];

  return (
    <div className="funcDetailSetting">
      {/* <div>
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
      </div> */}
      <div>기능 세부 설정은 추후 구현 예정</div>
    </div>
  );
};

export default FunctionDetailSetting;
