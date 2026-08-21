import "./restart.css";

const Restart = ({ refresh }) => {
  return (
    <button onClick={refresh}>
      <i className="bi bi-arrow-clockwise"></i>
    </button>
  );
};

export default Restart;
