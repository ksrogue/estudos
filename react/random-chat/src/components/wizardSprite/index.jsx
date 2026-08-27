import "./wizard.css";
import wizardSprite from "/src/assets/images/wizard_sprite.png";

const WizardSprite = ({onclick}) => {
  return (
    <div className="sprite-container">
      <img src={wizardSprite} alt="wizard sprite" onClick={onclick} />
    </div>
  );
};

export default WizardSprite;
