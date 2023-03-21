import "./style.css";
import SVGIcons from "../SVGIcons";
import { useState } from "react";

function DropDown() {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="dropDownContainer">
      <div
        className={`titleContainer ${showDropDown ? "dropDownActive" : ""}`}
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        <p>OBJECT</p>
        <SVGIcons.DropDown width={20} height={20} color="black" />
      </div>
      {showDropDown && (
        <div className="dropDown">
          <div className="dropDownSection">
            <h4>Types</h4>
            <ul>
              <li>STRING</li>
              <li>NUMBER</li>
              <li>BOOLEAN</li>
              <li>OBJECT</li>
              <li>ARRAY</li>
            </ul>
          </div>
          <div className="dropDownSection">
            <h4>Conditionals</h4>
            <ul>
              <li>OR</li>
              <li>AND</li>
              <li>XOR</li>
              <li>NOT</li>
              <li>IF-THEN-ELSE</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
