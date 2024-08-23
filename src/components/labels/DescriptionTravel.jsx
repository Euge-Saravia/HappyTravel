import "./descriptionTravel.scss"


const DescriptionTravel = () => {
  return (
    <div className="description-container ">
      <label  htmlFor="DescriptionTravel">¿Por qué quieres viajar allí? </label>
      <textarea maxLength={500} type="text" name="DescriptionTravel" className="description inner-shadow-top"/>
    </div>
  );
};

export default DescriptionTravel;
