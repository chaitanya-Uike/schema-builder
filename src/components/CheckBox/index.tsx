import { useState } from "react";
import "./style.css";
import { BsCheck } from "react-icons/bs";

function CheckBox() {
  const [checked, setChecked] = useState(false);

  function checkboxClicked() {
    setChecked(!checked);
  }

  return (
    <div className="checkboxWrapper">
      <div
        className={`checkbox ${checked ? "checkboxActive" : ""}`}
        onClick={checkboxClicked}
      >
        {checked && <BsCheck />}
      </div>
      <div
        className="checkboxBackdrop"
        style={{ backgroundColor: checked ? "#6b1f99" : "" }}
      ></div>
    </div>
  );
}

export default CheckBox;
