import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FieldCard = ({ onValueChange }) => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    if (value < 26) {
      const newValue = value + 1;
      setValue(newValue);
    }
  };

  const decreaseValue = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
    }
  };

  const handleInputChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 1 && newValue <= 26) {
      setValue(newValue);
    }
  };

  const handleValidate = () => {
    onValueChange(value);
  };

  return (
    <div className="bg-white shadow-lg p-4 text-center flex flex-col items-center justify-between">
      <div className="flex flex-row items-center justify-between">
        <div>
          <label className="block text-sm font-medium mr-2">
            Nombre de variable:
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseValue}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <AiOutlineMinus size={20} />
          </button>
          <input
            type="number"
            min="1"
            max="26"
            value={value}
            onChange={handleInputChange}
            className="border rounded-md px-2 py-1 w-16 text-center no-arrow"
          />
          <button
            onClick={increaseValue}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <AiOutlinePlus size={20} />
          </button>
        </div>
      </div>
      <button
        onClick={handleValidate}
        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Valider
      </button>
    </div>
  );
};

export default FieldCard;
