import "/src/css/var.css";
import "./styles.css";

function TopContainer() {
  return (
    <div className="top-container">
      <div className="stage-container">
        STAGE
        <span>1/5</span>
      </div>
      <div className="round-container">
        ROUND 
        <span>2</span>
      </div>
      <button className="mute-btn">mute</button>
    </div>
  );
}

export default TopContainer;
