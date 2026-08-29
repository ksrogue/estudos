import "./wizard.css";
import wizardSprite from "/src/assets/images/wizard_sprite.png";

const WizardSprite = ({onClick}) => {
  return (
    <div className="sprite-container">
      <img src={wizardSprite} alt="wizard sprite" onClick={onClick} />
    </div>
  );
};

export default WizardSprite;
