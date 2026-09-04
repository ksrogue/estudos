const CycleContainer = ( {cycleIcon, currentCycle, isOver}) => {
  return (
    <div className="cycle-container">
      <span className="cycle">
        <img
          src={cycleIcon}
          alt="icone que mostra se foi concluido o ciclo"
          className={`cycle-img ${currentCycle > 1 ? "completed" : ""}`}
        />
      </span>
      <span className="cycle">
        <img
          src={cycleIcon}
          alt="icone que mostra se foi concluido o ciclo"
          className={`cycle-img ${currentCycle > 2 ? "completed" : ""}`}
        />
      </span>
      <span className="cycle">
        <img
          src={cycleIcon}
          alt="icone que mostra se foi concluido o ciclo"
          className={`cycle-img ${currentCycle > 3 ? "completed" : ""}`}
        />
      </span>
      <span className="cycle">
        <img
          src={cycleIcon}
          alt="icone que mostra se foi concluido o ciclo"
          className={`cycle-img ${isOver ? "completed" : ""}`}
        />
      </span>
    </div>
  );
};

export default CycleContainer;
