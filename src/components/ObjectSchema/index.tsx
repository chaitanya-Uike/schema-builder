import { Dispatch, SetStateAction, useState } from "react";
import { ObjectSchema } from "../../types";
import StringSchemaNode from "../StringSchema";

interface Props {
  rootSchema: ObjectSchema;
  instancePath: (string | number)[];
  schema: ObjectSchema;
  setSchema: Dispatch<SetStateAction<ObjectSchema>>;
}

function propertyNameGenerator(schema: ObjectSchema) {
  const propPrefix = "my_property";
  const index = schema.properties.filter((prop) =>
    prop.name.startsWith(propPrefix)
  ).length;

  return index === 0 ? propPrefix : propPrefix + "_" + index;
}

function ObjectSchemaNode({
  instancePath,
  rootSchema,
  schema,
  setSchema,
}: Props) {
  const [showSchemaBody, setShowSchemaBody] = useState(false);

  function addProperty(type: string) {
    if (type === "object") {
      schema.properties.push({
        name: propertyNameGenerator(schema),
        type: "object",
        properties: [],
        required: [],
      });
    } else if (type === "string") {
      schema.properties.push({
        name: propertyNameGenerator(schema),
        type: "string",
        validations: [],
      });
    }
    setSchema({ ...rootSchema });
  }

  function removeProperty() {
    let property = rootSchema as { [key: string]: any };
    for (let i = 0; i < instancePath.length - 1; i++) {
      const key = instancePath[i];
      property = property[key];
    }
    const index = instancePath[instancePath.length - 1];
    property = [...property.splice(index, 1)];
  }

  return (
    <div className="schemaContainer">
      {instancePath.length > 0 && <div className="connector"></div>}
      <div className="schemaHeader">
        <p
          className="expandBtn"
          onClick={() => {
            setShowSchemaBody(!showSchemaBody);
          }}
          style={{ transform: showSchemaBody ? `rotate(180deg)` : "" }}
        >
          v
        </p>
        <input
          type="text"
          value={schema.name}
          onChange={(e) => {
            schema.name = e.target.value;
            setSchema({ ...rootSchema });
          }}
        />
        <div>OBJECT</div>
        <button className="removeSchema" onClick={removeProperty}>
          X
        </button>
      </div>
      {showSchemaBody && (
        <div className="schemaBody">
          <div style={{ position: "relative" }}>
            <div className="connector"></div>
            <div className="properties">properties</div>
            <div className="schemaBody" style={{ marginLeft: 20 }}>
              {schema.properties.map((subSchema, index) => {
                if (subSchema.type === "object")
                  return (
                    <ObjectSchemaNode
                      instancePath={[...instancePath, "properties", index]}
                      rootSchema={rootSchema}
                      schema={subSchema}
                      setSchema={setSchema}
                      key={index}
                    />
                  );
                if (subSchema.type === "string") {
                  return (
                    <StringSchemaNode
                      instancePath={[...instancePath, "properties", index]}
                      rootSchema={rootSchema}
                      schema={subSchema}
                      setSchema={setSchema}
                      key={index}
                    />
                  );
                }
              })}
              <AddPropertyBtn addProperty={addProperty} />
            </div>
          </div>
          <div className="endBulb"></div>
        </div>
      )}
    </div>
  );
}

function AddPropertyBtn({
  addProperty,
}: {
  addProperty: (type: string) => void;
}) {
  const types = ["object", "string"];
  const [showSelector, setShowSelector] = useState(false);
  return (
    <div className="addPropertyBtnContainer">
      <div className="connector"></div>
      <div className="tailRemover"></div>
      <button
        className="addValidationBtn"
        onClick={() => {
          setShowSelector(!showSelector);
        }}
      >
        + add property
      </button>
      {showSelector && (
        <div className="typeSelector">
          {types.map((type) => {
            return (
              <p
                key={type}
                onClick={() => {
                  addProperty(type);
                  setShowSelector(false);
                }}
              >
                {type.toUpperCase()}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ObjectSchemaNode;
