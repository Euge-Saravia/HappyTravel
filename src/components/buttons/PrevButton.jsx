import "./buttons.scss";

const PrevButton = ({ onPrevious }) => {
  return (
    <button className="pagButton" onClick={onPrevious}>
      <img src="/assets/icons/Arrows-icon.svg" className="prev" />
    </button>
  );
};

export default PrevButton;
