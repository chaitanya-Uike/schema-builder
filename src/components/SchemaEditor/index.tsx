import "./style.css";
import DropDown from "../Dropdown";

function SchemaEditor() {
  return (
    <div>
      <div className="schemaContainer">
        <input
          type="text"
          className="schemaNameInput"
          placeholder="schema name"
        />
        <DropDown />
      </div>
    </div>
  );
}

export default SchemaEditor;
