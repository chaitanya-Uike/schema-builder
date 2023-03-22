import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import { ObjectSchema, StringSchema, validation } from "../../types";
import { MdExpandMore } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";
import HoverableIcon from "../HoverableIcon";

interface Props {
  rootSchema: ObjectSchema;
  instancePath: (string | number)[];
  instanceSchema: StringSchema;
  setSchema: Dispatch<SetStateAction<ObjectSchema | null>>;
}

type validationType = {
  name: string;
  argType: "string" | "number";
};

const validations: validationType[] = [
  { name: "min", argType: "number" },
  { name: "max", argType: "number" },
  { name: "length", argType: "number" },
  { name: "startsWith", argType: "string" },
];

function StringSchemaNode({
  instancePath,
  rootSchema,
  instanceSchema,
  setSchema,
}: Props) {
  const [name, setName] = useState(instanceSchema.name);
  const [showSchemaBody, setShowSchemaBody] = useState(false);
  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (instanceSchema.name !== name) {
        instanceSchema.name = name;
        setSchema({ ...rootSchema });
      }
    }, 500);
  }, [name]);

  function addValidation(validation: string) {
    const present = instanceSchema.validations.some(
      (val) => val.name === validation
    );

    if (!present) {
      instanceSchema.validations.push({
        name: validation,
        value: "",
      });
      setSchema({ ...rootSchema });
    }
  }

  function removeValidation(index: number) {
    instanceSchema.validations.splice(index, 1);
    setSchema({ ...rootSchema });
  }

  function removeProperty() {
    const index = instancePath.pop();
    const property = instancePath.reduce((acc, currPath) => {
      return acc[currPath];
    }, rootSchema as { [key: string]: any });

    property.splice(index, 1);
    setSchema({ ...rootSchema });
  }

  function checkIfAllValdiationsAdded() {
    if (validations.length === instanceSchema.validations.length) return true;
    return false;
  }

  return (
    <div className="schemaContainer">
      {instancePath.length > 0 && <div className="connector"></div>}
      <div className="schemaHeader">
        <HoverableIcon
          Icon={MdExpandMore}
          onClick={() => {
            setShowSchemaBody(!showSchemaBody);
          }}
          style={{
            transform: showSchemaBody ? `rotate(180deg)` : "",
            fontSize: 30,
            color: "#bec5c8",
            transition: "all 300ms linear",
          }}
        />
        <input
          className="schemaNameInput"
          placeholder="schema name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div
          className="schemaType"
          style={{
            backgroundColor: "rgb(247, 236, 248)",
            color: "rgb(180, 0, 200)",
          }}
        >
          STRING
        </div>
        <HoverableIcon
          Icon={IoClose}
          onClick={removeProperty}
          style={{
            fontSize: 23,
            color: "#bec5c8",
            transition: "all 300ms linear",
            marginLeft: 20,
          }}
        />
      </div>
      {showSchemaBody && (
        <div className="schemaBody">
          {instanceSchema.validations.map((validation, index) => {
            const argType = validations.find(
              (val) => val.name === validation.name
            )?.argType;

            return (
              <div key={validation.name} className="validationDiv">
                <div className="connector" style={{ top: 23 }}></div>
                <div className="validationName">{validation.name}</div>
                <input
                  className="schemaNameInput"
                  placeholder="value"
                  type={argType === "number" ? "number" : "text"}
                  value={validation.value}
                  onChange={(e) => {
                    validation.value = e.target.value;
                    setSchema({ ...rootSchema });
                  }}
                />
                <HoverableIcon
                  Icon={IoClose}
                  onClick={() => removeValidation(index)}
                  style={{
                    fontSize: 23,
                    color: "#bec5c8",
                    transition: "all 300ms linear",
                    marginLeft: 20,
                  }}
                />
              </div>
            );
          })}
          {!checkIfAllValdiationsAdded() && (
            <AddValidationBtn
              addValidation={addValidation}
              appliedValidations={instanceSchema.validations}
              removeValidation={removeValidation}
            />
          )}
          <div className="tailRemover"></div>
        </div>
      )}
    </div>
  );
}

function AddValidationBtn({
  addValidation,
  removeValidation,
  appliedValidations,
}: {
  addValidation: (type: string) => void;
  removeValidation: (index: number) => void;
  appliedValidations: validation[];
}) {
  const [showSelector, setShowSelector] = useState(false);
  return (
    <div className="addPropertyBtnContainer">
      <div className="connector"></div>
      <button
        className={`addValidationBtn ${
          showSelector ? "addValidationBtnActive" : ""
        }`}
        onClick={() => {
          setShowSelector(!showSelector);
        }}
      >
        + add validation
      </button>
      {showSelector && (
        <div className="typeSelector">
          <ul>
            {validations.map((validation) => {
              const validationIndex = appliedValidations.findIndex(
                (val) => val.name === validation.name
              );
              return (
                <li
                  key={validation.name}
                  onClick={() => {
                    console.log(validationIndex);
                    if (validationIndex < 0) {
                      addValidation(validation.name);
                      setShowSelector(false);
                    } else {
                      removeValidation(validationIndex);
                    }
                  }}
                >
                  {validation.name.toUpperCase()}
                  {validationIndex >= 0 && (
                    <div
                      style={{
                        fontSize: 18,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <BsCheck />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StringSchemaNode;
