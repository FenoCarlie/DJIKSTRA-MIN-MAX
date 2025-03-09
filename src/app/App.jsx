import FieldCard from "../components/FieldCard";
import { useState } from "react";
import ReactFlowComponent from "../components/ReactFlowComponent";

function App() {
  const [fieldValue, setFieldValue] = useState(0);
  const handleValueChange = (newValue) => {
    setFieldValue(newValue);
  };
  console.log(fieldValue);

  return (
    <div className="h-screen relative">
      <ReactFlowComponent fieldValue={fieldValue} />
      <div className="absolute top-4 left-4">
        <FieldCard onValueChange={handleValueChange} />
      </div>
    </div>
  );
}

export default App;
