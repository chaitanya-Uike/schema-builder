import { useState } from "react";
import SchemaSelector from "../SchemaSelector";
import "./style.css";

function AddSchemaBtn() {
  const [showSelector, setShowSelector] = useState(false);
  return (
    <div className="addSchemaBtnContainer">
      <button
        className="addSchemaBtn"
        onClick={() => setShowSelector(!showSelector)}
      >
        + Add Schema
      </button>
      {showSelector && (
        <SchemaSelector style={{ transform: "translate(45%,-50%)" }} />
      )}
    </div>
  );
}

export default AddSchemaBtn;
