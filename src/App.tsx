import { useState } from "react";
import "./App.css";
import ObjectSchemaNode from "./components/ObjectSchema";
import Test from "./components/Test";
import { ObjectSchema } from "./types";

function App() {
  const [schema, setSchema] = useState<ObjectSchema>({
    name: "employee_schema",
    type: "object",
    properties: [],
    required: [],
  });

  console.log(schema);

  return (
    <div className="App">
      <ObjectSchemaNode
        instancePath={[]}
        rootSchema={schema}
        schema={schema}
        setSchema={setSchema}
      />
    </div>
  );
}

export default App;
