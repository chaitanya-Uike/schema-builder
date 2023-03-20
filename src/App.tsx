import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="schemaContainer">
        <div className="schemaHeader">
          <input type="text" />
          <div>OBJECT</div>
          <button className="removeSchema">X</button>
        </div>
        <div className="schemaBody">
          <div>
            <div className="properties">properties</div>
            <div className="schemaBody">
              <div className="schemaContainer">
                <div className="schemaHeader">
                  <input type="text" />
                  <div>STRING</div>
                  <button className="removeSchema">X</button>
                </div>
                <div className="schemaBody">
                  <div className="validationDiv">
                    <div>format</div>
                    <input type="text" />
                    <button className="removeBtn">X</button>
                  </div>
                  <button className="addValidationBtn">+ add validation</button>
                </div>
              </div>

              <div className="schemaContainer">
                <div className="schemaHeader">
                  <input type="text" />
                  <div>STRING</div>
                  <button className="removeSchema">X</button>
                </div>
                <div className="schemaBody">
                  <div className="validationDiv">
                    <div>min</div>
                    <input type="number" />
                    <button className="removeBtn">X</button>
                  </div>
                  <div className="validationDiv">
                    <div>max</div>
                    <input type="number" />
                    <button className="removeBtn">X</button>
                  </div>
                  <div className="validationDiv">
                    <div>match</div>
                    <input type="text" />
                    <button className="removeBtn">X</button>
                  </div>
                  <button className="addValidationBtn">+ add validation</button>
                </div>
              </div>

              <div className="schemaContainer">
                <div className="schemaHeader">
                  <input type="text" />
                  <div>OBJECT</div>
                  <button className="removeSchema">X</button>
                </div>
                <div className="schemaBody">
                  <div>
                    <div className="properties">properties</div>
                    <div className="schemaBody">
                      <div className="schemaContainer">
                        <div className="schemaHeader">
                          <input type="text" />
                          <div>STRING</div>
                          <button className="removeSchema">X</button>
                        </div>
                        <div className="schemaBody">
                          <div className="validationDiv">
                            <div>format</div>
                            <input type="text" />
                            <button className="removeBtn">X</button>
                          </div>
                          <button className="addValidationBtn">
                            + add validation
                          </button>
                        </div>
                      </div>

                      <div className="schemaContainer">
                        <div className="schemaHeader">
                          <input type="text" />
                          <div>STRING</div>
                          <button className="removeSchema">X</button>
                        </div>
                        <div className="schemaBody">
                          <div className="validationDiv">
                            <div>min</div>
                            <input type="number" />
                            <button className="removeBtn">X</button>
                          </div>
                          <div className="validationDiv">
                            <div>max</div>
                            <input type="number" />
                            <button className="removeBtn">X</button>
                          </div>
                          <div className="validationDiv">
                            <div>match</div>
                            <input type="text" />
                            <button className="removeBtn">X</button>
                          </div>
                          <button className="addValidationBtn">
                            + add validation
                          </button>
                        </div>
                      </div>
                      <button className="addValidationBtn">
                        + add property
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button className="addValidationBtn">+ add property</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
