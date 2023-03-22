import { useState } from "react";
import "./App.css";
import ObjectSchemaNode from "./components/ObjectSchema";
import { ObjectSchema } from "./types";

function App() {
  const [schema, setSchema] = useState<ObjectSchema | null>({
    name: "employee_schema",
    type: "object",
    properties: [],
    required: [],
  });

  console.log(schema);

  return (
    <div className="App">
      {schema && (
        <ObjectSchemaNode
          instancePath={[]}
          rootSchema={schema}
          instanceSchema={schema}
          setSchema={setSchema}
        />
      )}
    </div>
  );
}

export default App;
