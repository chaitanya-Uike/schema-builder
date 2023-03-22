import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ObjectSchema } from "../../types";
import StringSchemaNode from "../StringSchema";
import { MdExpandMore } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import HoverableIcon from "../HoverableIcon";
import { hashString } from "../../utils";
import CheckBox from "../CheckBox";

interface Props {
  rootSchema: ObjectSchema;
  instancePath: (string | number)[];
  instanceSchema: ObjectSchema;
  setSchema: Dispatch<SetStateAction<ObjectSchema | null>>;
}

function generatePropName(schema: ObjectSchema) {
  const propPrefix = "schema";
  const index = schema.properties.filter((prop) =>
    prop.name.startsWith(propPrefix)
  ).length;

  return index === 0 ? propPrefix : propPrefix + "_" + index;
}

function ObjectSchemaNode({
  instancePath,
  rootSchema,
  instanceSchema,
  setSchema,
}: Props) {
  const [name, setName] = useState(instanceSchema.name);
  const [showSchemaBody, setShowSchemaBody] = useState(false);
  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    // debounce the setting of schema name
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (instanceSchema.name !== name) {
        instanceSchema.name = name;
        setSchema({ ...rootSchema });
      }
    }, 750);
  }, [name]);

  function addProperty(type: string) {
    // we need to add a unique id to use as key
    const hash = hashString(
      instancePath.join("") + Math.random() * 1000,
      Math.random() * 1000
    );

    if (type === "object") {
      instanceSchema.properties.push({
        name: generatePropName(instanceSchema),
        type: "object",
        properties: [],
        required: [],
        id: hash,
      });
    } else if (type === "string") {
      instanceSchema.properties.push({
        name: generatePropName(instanceSchema),
        type: "string",
        validations: [],
        id: hash,
      });
    }
    setSchema({ ...rootSchema });
  }

  function removeProperty() {
    if (instancePath.length === 0) {
      setSchema(null);
    } else {
      const index = instancePath.pop();
      const property = instancePath.reduce((acc, currPath) => {
        return acc[currPath];
      }, rootSchema as { [key: string]: any });

      property.splice(index, 1);
      setSchema({ ...rootSchema });
    }
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
            backgroundColor: "rgb(236, 248, 241)",
            color: "rgb(0, 163, 86)",
          }}
        >
          OBJECT
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
          <div style={{ position: "relative" }}>
            <div className="connector"></div>
            <div className="properties">properties</div>
            <div className="schemaBody" style={{ marginLeft: 20 }}>
              {instanceSchema.properties.map((subSchema, index) => {
                if (subSchema.type === "object")
                  return (
                    <PropertyNodeWrapper key={subSchema.id}>
                      <ObjectSchemaNode
                        instancePath={[...instancePath, "properties", index]}
                        rootSchema={rootSchema}
                        instanceSchema={subSchema}
                        setSchema={setSchema}
                      />
                    </PropertyNodeWrapper>
                  );
                if (subSchema.type === "string") {
                  return (
                    <PropertyNodeWrapper key={subSchema.id}>
                      <StringSchemaNode
                        instancePath={[...instancePath, "properties", index]}
                        rootSchema={rootSchema}
                        instanceSchema={subSchema}
                        setSchema={setSchema}
                      />
                    </PropertyNodeWrapper>
                  );
                }
              })}
              <AddPropertyBtn addProperty={addProperty} />
              <div className="tailRemover"></div>
            </div>
          </div>
          <div className="endBulb"></div>
        </div>
      )}
    </div>
  );
}

function PropertyNodeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="propertyNodeWrapper">
      {children}
      <div className="requiredContainer">
        <p>*required</p>
        <CheckBox />
      </div>
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
      <button
        className={`addValidationBtn ${
          showSelector ? "addValidationBtnActive" : ""
        }`}
        onClick={() => {
          setShowSelector(!showSelector);
        }}
      >
        + add property
      </button>
      {showSelector && (
        <div className="typeSelector">
          <ul>
            {types.map((type) => {
              return (
                <li
                  key={type}
                  onClick={() => {
                    addProperty(type);
                    setShowSelector(false);
                  }}
                >
                  {type.toUpperCase()}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ObjectSchemaNode;
