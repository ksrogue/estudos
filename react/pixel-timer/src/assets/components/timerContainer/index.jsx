const TimerContainer = ({timer, text}) => {
  return (
    <div className="timer-container">
      <div className="timer">{timer}</div>
      <span className="timer-text">{text}</span>
    </div>
  );
};

export default TimerContainer;
