import del from "../assets/delete.svg";

export default function DisplayAdd({ handleDelete, displayObj }) {
  console.log(displayObj.displayAddress);
  return (
    <div className="address-div">
      <div onClick={handleDelete} className="svg--div">
        <img src={del} alt="delete" className="DelSvg" />
      </div>
      <div className="del--header">
        <p><b>Name:</b> {displayObj.displayName}</p>
        <p><b>Address:</b> {displayObj.displayAddress}</p>
      </div>
    </div>
  );
}
