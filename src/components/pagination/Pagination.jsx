import "./pagination.scss";
import PrevButton from "../buttons/PrevButton";
import NextButton from "../buttons/NextButton";

const Pagination = ({ onPrevious, onNext, currentPage }) => {
  return (
    <div className="pag">
      <PrevButton onPrevious={onPrevious} />
      <p className="numPag">{currentPage + 1}</p>
      <NextButton onNext={onNext} />
    </div>
  );
};

export default Pagination;
