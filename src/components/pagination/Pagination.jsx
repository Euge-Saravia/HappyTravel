import "./pagination.scss";
import PrevButton from "../buttons/PrevButton";
import NextButton from "../buttons/NextButton";

const Pagination = () => {
  return (
    <div className="pag">
      <PrevButton />
      <p className="text-jaldi-bold">1</p>
      <NextButton />
    </div>
  );
};

export default Pagination;
