import { useState } from "react";
import "./App.css";
import Lamp from "./Lamp";
import axios from "axios";

function App() {
  const [lampColor, setLampColor] = useState("#f1c40f");

  const handleColorChange = (e) => {
    setLampColor(e.target.value);
    sendDataToArduino();
  };

  const sendDataToArduino = () => {
    axios
      .post("http://localhost:3001/sendData", { data: lampColor + "\n" })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending data to Arduino:", error);
      });
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <Lamp color={lampColor} />

      <div className="ml-4">
        <label htmlFor="colorInput" className="text-gray-700">
          Lamp Color:
        </label>
        <input
          type="color"
          id="colorInput"
          value={lampColor}
          onChange={handleColorChange}
          className="ml-2"
        />
      </div>
    </div>
  );
}

export default App;
