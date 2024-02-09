const byte PIN_LED_R = 3;
const byte PIN_LED_G = 5;
const byte PIN_LED_B = 6;

const byte dt = 1000;
void setup() {
  Serial.begin(9600);

  pinMode(PIN_LED_R, OUTPUT);
  pinMode(PIN_LED_G, OUTPUT);
  pinMode(PIN_LED_B, OUTPUT);
}

void loop() {
 
  // Check if there is serial data available
  if (Serial.available() > 0) {
    // Read the incoming data
    String data = Serial.readStringUntil('\n');
    Serial.println(data);
    Serial.print("Getting Color : ");
    Serial.println(data);
    // Parse the data and extract RGB values
    parseAndDisplayColor(data);
  }

  // Your other loop code here
  delay(dt);
}

void displayColor(byte r, byte g, byte b) {
  analogWrite(PIN_LED_R, r);
  analogWrite(PIN_LED_G, g);
  analogWrite(PIN_LED_B, b);
}

void parseAndDisplayColor(String data) {
  if (data.length() == 7 && data[0] == '#') {
    // Extract hexadecimal values for R, G, and B
    long hexValue = strtol(data.substring(1).c_str(), NULL, 16);
    
    int r = (hexValue >> 16) & 0xFF;
    int g = (hexValue >> 8) & 0xFF;
    int b = hexValue & 0xFF;

    // Display the color
    displayColor(r, g, b);
  }
}
