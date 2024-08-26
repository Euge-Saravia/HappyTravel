import "./title.scss";
const Title = ({ title, width = '80%' }) => {
  return (
    <div className="formTitle" style={{ width }}>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
