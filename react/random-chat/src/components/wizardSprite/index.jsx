import "./wizard.css";


const WizardSprite = ({ onClick, sprite, isConjuring }) => {
  return (
    <div className={`sprite-container ${isConjuring}`}>
      <img src={sprite} alt="wizard sprite" onClick={onClick} />
    </div>
  );
};

export default WizardSprite;
