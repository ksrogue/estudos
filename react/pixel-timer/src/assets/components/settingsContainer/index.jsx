const SettingsContainer = ( {addCycle, rmvCycle, addBreak, rmvBreak, userCycle, userBreak, save, showSettings}) => {
  return (
    <div className={`settings-wraper ${showSettings ? "show-settings" : ""}`}>
            <div className="cycle-wraper">
              <p>CICLO</p>
              <div className="cycle-btn">
                <i className="bi bi-chevron-left" onClick={rmvCycle}></i>
                <span>{userCycle}</span>
                <i className="bi bi-chevron-right" onClick={addCycle}></i>
              </div>
            </div>
            <div className="break-wraper">
              <p>PAUSA</p>
              <div className="cycle-btn">
                <i className="bi bi-chevron-left" onClick={rmvBreak}></i>
                <span>{userBreak}</span>
                <i className="bi bi-chevron-right" onClick={addBreak}></i>
              </div>
            </div>
          
            <button className="save-button" onClick={save}>SALVAR</button>
          </div>
  );
};

export default SettingsContainer;
