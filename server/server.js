const express = require("express");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const cors = require("cors");

const app = express();
const port = 3001;
const portName = "COM3"; // Change 'COM3' to your Arduino port
const portNumber = 9600;
const arduinoPort = new SerialPort({ path: portName, baudRate: portNumber });
const parser = arduinoPort.pipe(new ReadlineParser({ delimiter: "\r\n" }));
//arduinoPort.open();

app.use(express.json());
app.use(cors());

app.post("/sendData", (req, res) => {
  const { data } = req.body;
  console.log(`Sending data to Arduino: ${data}`);

  arduinoPort.write(data);
  res.send("Data sent to Arduino");
});

// parser.on("data", (data) => {
//   console.log(`Data from Arduino: ${data}`);
//   // You can broadcast this data to your React application using WebSockets or any other method.
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
