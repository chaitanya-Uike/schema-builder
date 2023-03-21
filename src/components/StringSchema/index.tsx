import { Dispatch, SetStateAction, useState } from "react";
import { ObjectSchema, StringSchema } from "../../types";

interface Props {
  rootSchema: ObjectSchema;
  instancePath: (string | number)[];
  schema: StringSchema;
  setSchema: Dispatch<SetStateAction<ObjectSchema>>;
}

function StringSchemaNode({
  instancePath,
  rootSchema,
  schema,
  setSchema,
}: Props) {
  const [showSchemaBody, setShowSchemaBody] = useState(false);
  const validations = ["min", "max", "length"];

  function addValidation(validation: string) {
    const present = schema.validations.some((val) => val.name === validation);

    if (!present) {
      schema.validations.push({
        name: validation,
        value: "",
      });
      setSchema({ ...rootSchema });
    }
  }

  function removeProperty() {
    let property = rootSchema as { [key: string]: any };
    for (let i = 0; i < instancePath.length - 1; i++) {
      const key = instancePath[i];
      property = property[key];
    }
    const index = instancePath[instancePath.length - 1];
    property = [...property.splice(index, 1)];

    setSchema({ ...rootSchema });
  }

  function checkIfAllValdiationsAdded() {
    if (validations.length === schema.validations.length) return true;
    return false;
  }

  return (
    <div className="schemaContainer">
      <div className="connector"></div>
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
        <div>STRING</div>
        <button className="removeSchema" onClick={removeProperty}>
          X
        </button>
      </div>
      {showSchemaBody && (
        <div className="schemaBody">
          {schema.validations.map((validation, index) => {
            return (
              <div key={validation.name} className="validationDiv">
                <div className="connector"></div>
                <div>{validation.name}</div>
                <input
                  type="text"
                  value={validation.value}
                  onChange={(e) => {
                    validation.value = e.target.value;
                    setSchema({ ...rootSchema });
                  }}
                />
                <button
                  className="removeBtn"
                  onClick={() => {
                    schema.validations.splice(index, 1);
                    setSchema({ ...rootSchema });
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
          {!checkIfAllValdiationsAdded() && (
            <AddValidationBtn
              addValidation={addValidation}
              validations={validations}
            />
          )}
        </div>
      )}
    </div>
  );
}

function AddValidationBtn({
  addValidation,
  validations,
}: {
  addValidation: (type: string) => void;
  validations: string[];
}) {
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
        + add validation
      </button>
      {showSelector && (
        <div className="typeSelector">
          {validations.map((type) => {
            return (
              <p
                onClick={() => {
                  addValidation(type);
                  setShowSelector(false);
                }}
                key={type}
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

export default StringSchemaNode;
