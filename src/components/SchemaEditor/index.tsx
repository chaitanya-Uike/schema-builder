import { useState } from "react";
import { Schema } from "../../types";
import AddSchemaBtn from "../AddSchemaBtn";
import "./style.css";

function SchemaEditor() {
  const [schema, setSchema] = useState<Schema | null>(null);

  return <div>{!schema && <AddSchemaBtn />}</div>;
}

export default SchemaEditor;
