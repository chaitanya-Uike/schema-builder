import "./style.css";

interface Props {
  style?: React.CSSProperties;
}

function SchemaSelector({ style }: Props) {
  return (
    <div className="schemaSelector" style={style}>
      <h3>Search Schema</h3>
      <input type="text" placeholder="search schemas" />
      <h3 style={{ marginTop: 15 }}>Create Schema</h3>
      <div className="createSchemaContainer">
        <h4>schema types</h4>
        <ul>
          <li>string</li>
          <li>number</li>
          <li>boolean</li>
          <li>object</li>
          <li>array</li>
        </ul>
        <h4 style={{ marginTop: 15 }}>schema composition</h4>
        <ul>
          <li>or</li>
          <li>and</li>
          <li>xor</li>
          <li>not</li>
          <li>if-then-else</li>
        </ul>
      </div>
    </div>
  );
}

export default SchemaSelector;
