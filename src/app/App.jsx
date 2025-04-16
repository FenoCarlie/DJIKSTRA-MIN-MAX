import React, { useState } from "react";
import FieldCard from "../components/FieldCard";
import ReactFlowComponent from "../components/ReactFlowComponent";
import { EdgeValuesProvider } from "../contexts/EdgeValuesContext";

function App() {
  const [fieldValue, setFieldValue] = useState(0);

  const handleValueChange = (newValue) => {
    setFieldValue(newValue);
  };

  console.log(fieldValue);

  return (
    <EdgeValuesProvider>
      <div className="h-screen relative">
        <ReactFlowComponent fieldValue={fieldValue} />
        <div className="absolute top-4 left-4">
          <FieldCard onValueChange={handleValueChange} />
        </div>
      </div>
    </EdgeValuesProvider>
  );
}

export default App;
