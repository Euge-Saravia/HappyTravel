import "./buttons.scss";

const NextButton = ({ onNext }) => {
  return (
    <button className="pagButton" onClick={onNext}>
      <img src="/assets/icons/Arrows-icon.svg" />
    </button>
  );
};

export default NextButton;
