import { useState } from "react";
import "./style.css";
import { BsCheck } from "react-icons/bs";

interface Props {
  onChange: (value: boolean) => void;
}

function CheckBox({ onChange }: Props) {
  const [checked, setChecked] = useState(false);

  function checkboxClicked() {
    onChange(!checked);
    setChecked(!checked);
  }

  return (
    <div className="checkboxWrapper" onClick={checkboxClicked}>
      <div
        className={`checkbox ${checked ? "checkboxActive" : ""}`}
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
