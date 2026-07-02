/* ──────────────────────────────────────────────
   Embedded / Hardware Projects Data
   ────────────────────────────────────────────── */

// Project 1: Intrusion Detection
import main_circuit from "../assets/Embedded/Intrusion Detection/main_circuit.jpg";
import pic1 from "../assets/Embedded/Intrusion Detection/pic1.jpg";
import pic2 from "../assets/Embedded/Intrusion Detection/pic2.jpg";

// Project 2: App Control by Joystick
import app_pic1 from "../assets/Embedded/App Control/pic1.jpg";
import app_pic2 from "../assets/Embedded/App Control/pic2.png";

const EMBEDDED_PROJECTS = [
  {
    id: "intrusion-detection-system",
    title: "Simple Intrusion Detection System",
    desc: "A physical security device built with Arduino UNO that uses an ultrasonic sensor, active buzzer, and laser emitter to detect proximity and trigger alerts.",
    tags: ["Arduino", "C++", "Ultrasonic Sensor", "Hardware Security"],
    year: "2026",

    // ── Detail page fields ──
    overview:
      "This was my very first hardware project! I built a simple physical security device designed to monitor a localized area and detect when an object or intruder crosses a defined distance boundary. By combining an HC-SR04 ultrasonic sensor with an Arduino UNO microcontroller on a breadboard, the system computes target distances in real-time. When proximity falls below a threshold, it immediately signals warning indicators, including a high-pitched active buzzer sound and a warning laser emitter.",
    challenge:
      "Understanding the fundamentals of hardware wiring, connecting multiple sensors and outputs safely on a single breadboard with appropriate power distribution, and calculating distances precisely from microsecond sensor pulses without signal bounce.",
    solution:
      "Wired the ultrasonic sensor, active buzzer, and laser emitter directly to the Arduino UNO's digital and power pins. Wrote a clean C/C++ control loop in the Arduino IDE to transmit ultrasonic pulses, measure Echo return times, calculate real-time distance using the speed of sound, and trigger responsive alerts.",

    // Hardware components used
    components: [
      { name: "Arduino UNO", type: "Microcontroller" },
      { name: "Breadboard", type: "Prototyping" },
      { name: "Active Buzzer", type: "Actuator" },
      { name: "Ultrasonic Sensor (HC-SR04)", type: "Sensor" },
      { name: "Laser Emitter", type: "Laser Emit" },
      { name: "Jumper Wires", type: "Connectivity" },
    ],

    // What was learned
    learnings: [
      "Interfacing and querying ultrasonic distance sensors via digital pulses.",
      "Combining and coordinating multiple sensors and actuators in a single control flow.",
      "Basic breadboard layout, circuit design, and component power requirements.",
      "Writing, compiling, and uploading embedded C/C++ code via the Arduino IDE.",
    ],

    // Media assets
    video: "/assets/Embedded/Intrusion Detection/video.mp4",
    images: [main_circuit, pic1, pic2],
    gallery: [main_circuit, pic1, pic2],

    features: [
      "Real-time ultrasonic proximity monitoring",
      "Audible alarm system via high-frequency active buzzer",
      "Visual warning alerts via integrated laser indicator",
      "Robust logic preventing false positive trigger anomalies",
      "Direct power delivery over USB or DC power jack",
    ],
    outcomes: [
      "Built a fully working, self-contained physical intrusion detector",
      "Gained hands-on understanding of microcontrollers and basic circuits",
      "Acquired practical experience linking software logic directly to physical hardware responses",
    ],
    repo: "https://github.com/NOTSUMIT0/Intrusion-Detection-",
    nextProject: "app-control-joystick",
  },
  {
    id: "app-control-joystick",
    title: "App Control by Joystick",
    desc: "A physical desktop companion that maps custom analog joystick directions to execute actions, launch applications, and open websites on a PC.",
    tags: ["Arduino", "Python", "Prototyping", "Automation"],
    year: "2026",

    // ── Detail page fields ──
    overview:
      "Designed and built a custom physical shortcut controller using an Arduino UNO and a 2-axis analog joystick. By mapping directional movements (up, down, left, right) and the integrated push-button click to analog and digital signals, the system transmits coordinates to a host computer. A background script on the host PC processes the joystick's position and triggers specific system commands: Left opens Notepad, Right opens the Game Launcher, Up opens the Command Prompt (CMD), Down opens Google in the browser, and pressing the joystick button opens Paint. This provides a customizable physical controller to automate and ease daily PC operations.",
    challenge:
      "Handling serial communication latency between the Arduino and Python listener script without causing CPU bottlenecks, mapping the raw analog X/Y voltages (0-1023) to distinct trigger zones, and ensuring debounce logic prevented repeated rapid application launches.",
    solution:
      "Wrote a Python script utilizing serial interface libraries to read data packets from the Arduino. Calibrated thresholds to divide joystick motion into clear directional regions (e.g., X > 800 for right, X < 200 for left) and added lock-out timers in Python to trigger each application only once per distinct toggle gesture.",

    // Hardware components used
    components: [
      { name: "Arduino UNO", type: "Microcontroller" },
      { name: "Analog Joystick Module (XY)", type: "Sensor" },
      { name: "Breadboard", type: "Prototyping" },
      { name: "Jumper Wires", type: "Connectivity" },
    ],

    // What was learned
    learnings: [
      "Interfacing 2-axis analog inputs (potentiometers) with microcontroller ADC channels.",
      "Establishing robust serial communication protocols between Arduino and PC host systems.",
      "Writing background listener scripts in Python to map external inputs to OS-level commands.",
      "Designing user automation tools to increase daily workspace efficiency.",
    ],

    // Media assets
    video: "/assets/Embedded/App Control/video.mp4",
    images: [app_pic1, app_pic2],
    gallery: [app_pic1, app_pic2],

    features: [
      "Toggle Left opens Notepad",
      "Toggle Right opens Game Launcher",
      "Toggle Up opens Command Prompt (CMD)",
      "Toggle Down opens Google Chrome web search",
      "Joystick push-button click opens MS Paint",
      "Fully customizable application and website command bindings",
    ],
    outcomes: [
      "Engineered a functional physical shortcut controller",
      "Successfully automated desktop actions with cross-platform Python integration",
      "Learned serial data transfer protocols and device control schemes",
    ],
    repo: "https://github.com/NOTSUMIT0/App-Control",
    nextProject: "intrusion-detection-system",
  },
];

export default EMBEDDED_PROJECTS;
