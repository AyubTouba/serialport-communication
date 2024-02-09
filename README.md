# SerialPort Communication - Arduino and Web with Node.js and React

This repository demonstrates a simple communication setup between an Arduino device and a web application using Node.js and React. The communication is achieved through the serial port, with the server acting as a bridge between the Arduino and the React frontend.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- Arduino IDE (for uploading the sketch to your Arduino board)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AyubTouba/serialport-communication.git
   cd serialport-communication

   ```

1. **Update Arduino Port Configuration:**
   To use the communication, modify the `portName` and `portNumber` in `server/server.js` to match your Arduino's port configuration.
   ```javascript
   const portName = "COM3"; // Change to your Arduino port
   const portNumber = 9600;
   ```
1. **Upload Arduino Sketch:**
   Open the Arduino IDE and upload the provided sketch (sketch_rgb.ino) to your Arduino board.
1. **Start the Server and Frontend:**
   In the server folder, run:

   ```
   npm run web

   ```

## Usage

Visit [http://localhost:5173](http://localhost:5173) in your web browser to interact with the React application. The application allows you to send data to the Arduino, changing the color of an RGB LED connected to the Arduino.

Additionally, customize the sketch_rgb.ino file if needed. The provided sketch reads color data sent from the server via the serial port and adjusts the RGB LED accordingly.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Your feedback and improvements are highly appreciated!

## License

This project is licensed under the MIT License.
