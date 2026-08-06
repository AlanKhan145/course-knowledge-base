import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const workspace = "D:/Sao lưu/Udemy/work/presentations/week05-automation-systems";
const starterPptx = `${workspace}/tmp/template-starter.pptx`;
const finalPptx = "D:/Sao lưu/Udemy/3707ict-automation-and-iot/Week 05 - Automation Systems and Control Concepts/Wk05-Workshop.pptx";
const previewDir = `${workspace}/tmp/final-preview`;
const layoutDir = `${workspace}/tmp/final-layout`;
const montagePath = `${workspace}/tmp/final-montage.webp`;

const taskRoot = "D:/Sao lưu/Udemy/3707ict-automation-and-iot/3707-code/3707-code/Week 05 - Automation Systems and Control Concepts";
const taskImage = (name) => `${taskRoot}/${name}/output.png`;

async function readBytes(filePath) {
  const bytes = await fs.readFile(filePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

async function writeBlob(filePath, blob) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

function resolveText(presentation, slideNumber, name, occurrence = 0) {
  const slide = presentation.slides.items[slideNumber - 1];
  const matches = slide.shapes.items.filter((item) => item.name === name);
  const target = matches[occurrence];
  if (!target) throw new Error(`Could not find shape ${name} on slide ${slideNumber}`);
  return target;
}

function resolveTable(presentation, slideNumber, name = "Table 3") {
  const slide = presentation.slides.items[slideNumber - 1];
  const target = slide.tables.items.find((item) => item.name === name);
  if (!target) throw new Error(`Could not find table ${name} on slide ${slideNumber}`);
  return target;
}

function resolveImage(presentation, slideNumber, name, occurrence = 0) {
  const slide = presentation.slides.items[slideNumber - 1];
  const matches = slide.images.items.filter((item) => item.name === name);
  const target = matches[occurrence];
  if (!target) throw new Error(`Could not find image ${name} on slide ${slideNumber}`);
  return target;
}

function setText(presentation, slideNumber, name, value, occurrence = 0) {
  const target = resolveText(presentation, slideNumber, name, occurrence);
  target.text = value;
  return target;
}

function setTitle(presentation, slideNumber, value, name = "Title 2") {
  const target = resolveText(presentation, slideNumber, name);
  target.text.set([[{ run: value }]]);
  target.text.style = {
    fontSize: 46.67,
    typeface: "Arial",
    color: "#EC251D",
    bold: true,
  };
  return target;
}

function setCode(presentation, slideNumber, name, value) {
  const target = setText(presentation, slideNumber, name, value);
  target.text.style = {
    fontSize: 16,
    typeface: "Courier New",
    color: "#222222",
    wrap: "none",
  };
  return target;
}

function setTable(presentation, slideNumber, name, values) {
  const table = resolveTable(presentation, slideNumber, name);
  for (let row = 0; row < values.length; row += 1) {
    for (let column = 0; column < values[row].length; column += 1) {
      table.cells.set(row, column, values[row][column]);
    }
  }
  return table;
}

async function replaceImage(presentation, slideNumber, name, filePath, alt, fit = "contain") {
  const image = resolveImage(presentation, slideNumber, name);
  const bytes = await readBytes(filePath);
  image.replace({ blob: bytes, contentType: "image/png", alt, fit });
  image.fit = fit;
  image.alt = alt;
  return image;
}

function accentFirstLine(shape, color) {
  const firstLine = String(shape.text?.toString?.() || "").split("\n")[0];
  if (!firstLine) return;
  try {
    const range = shape.text.get(firstLine);
    range.bold = true;
    range.fill = color;
  } catch {
    // Imported rich text can expose no range for an empty or rewritten run.
  }
}

async function main() {
  await fs.mkdir(previewDir, { recursive: true });
  await fs.mkdir(layoutDir, { recursive: true });

  const presentation = await PresentationFile.importPptx(await FileBlob.load(starterPptx));

  // 1. Cover
  setText(presentation, 1, "Google Shape;78;p9", "Week 5 Workshop:\nAutomation Systems & Control\n3707ICT Automation and IoT");

  // 2. Why automation
  setTitle(presentation, 2, "From Sensors to Automatic Control");
  setText(presentation, 2, "TextBox 3", " Automation turns measurements into actions.\nLearning outcomes\nSense -> decide -> act -> observe\nOpen loop vs closed loop\nThresholds and hysteresis\nControl error and feedback\nPID: P, I and D roles\nBuild and test four ESP32 labs");
  const loop = setText(presentation, 2, "TextBox 5", "The loop you will build\nEnvironment\n-> Sensor (potentiometer / LDR)\n-> ESP32 controller\n-> Threshold logic\n-> LED actuator\n-> Measured environment");
  accentFirstLine(loop, "#003DA5");
  setText(presentation, 2, "TextBox 6", "Concept first, then evidence: open loop -> threshold -> automatic light -> hysteresis.");

  // 3. Roadmap
  setTitle(presentation, 3, "Workshop Roadmap");
  setTable(presentation, 3, "Table 3", [
    ["Part", "Topic", "Takeaway"],
    ["A", "Control system", "Sense, decide, act, observe"],
    ["B", "Open / closed loop", "Feedback changes the decision"],
    ["C", "Thresholds", "One boundary selects ON/OFF"],
    ["D", "Tasks 1-2", "Fixed timer, then potentiometer"],
    ["E", "Task 3", "LDR turns light on in darkness"],
    ["F", "Task 4", "Hysteresis prevents chatter"],
  ]);
  setText(presentation, 3, "TextBox 4", "All four experiments run in Wokwi with an ESP32, LED and Serial Monitor.");

  // 4. Sense-decide-act-observe model
  setTitle(presentation, 4, "Sense -> Decide -> Act -> Observe");
  setText(presentation, 4, "TextBox 3", "Every Week 5 controller repeats this loop.");
  setText(presentation, 4, "Rounded Rectangle 4", "Physical\ncondition");
  setText(presentation, 4, "Rounded Rectangle 6", "Sensor\nmeasures it");
  setText(presentation, 4, "Rounded Rectangle 8", "ESP32 controller\napplies rule");
  setText(presentation, 4, "Rounded Rectangle 10", "Actuator\nchanges process");
  setText(presentation, 4, "TextBox 17", "feedback: the next reading sees the result");
  setText(presentation, 4, "TextBox 19", "Input side\nLDR or potentiometer -> ADC value");
  setText(presentation, 4, "TextBox 21", "Output side\nGPIO 13 -> resistor -> LED");
  setText(presentation, 4, "TextBox 22", "Open loop stops before observe; closed loop returns feedback to the decision.");

  // 5. Control anatomy
  setTitle(presentation, 5, "Control System Anatomy");
  setText(presentation, 5, "TextBox 3", "A controller compares a desired condition with a measured process variable, then commands an actuator.");
  setTable(presentation, 5, "Table 5", [
    ["Element", "Meaning", "Lighting example", "Role"],
    ["Setpoint", "Desired value", "Target brightness", "Reference"],
    ["Process variable", "Measured value", "LDR reading", "Feedback"],
    ["Error", "Setpoint - measurement", "r(t) - y(t)", "Decision input"],
  ]);

  // 6. Industrial context
  setTitle(presentation, 6, "Industrial Automation Stack");
  setText(presentation, 6, "TextBox 3", " Automation scales from field devices to supervisory and enterprise software.");
  setText(presentation, 6, "Rounded Rectangle 4", "Field input\nSensor / LDR");
  setText(presentation, 6, "Rounded Rectangle 5", "Embedded control\nESP32");
  setText(presentation, 6, "Rounded Rectangle 6", "Industrial control\nPLC");
  setText(presentation, 6, "Rounded Rectangle 7", "Operator view\nHMI");
  setText(presentation, 6, "Rounded Rectangle 8", "Supervision\nSCADA");
  setText(presentation, 6, "Rounded Rectangle 9", "Planning\nMES / ERP");
  const transducer = setText(presentation, 6, "TextBox 11", "Sensors measure. Controllers execute cyclic logic. HMI and SCADA make the process visible.");
  accentFirstLine(transducer, "#1A8A3E");

  // 7. Signals
  setTitle(presentation, 7, "Digital and Analogue Signals");
  const digital = setText(presentation, 7, "TextBox 5", "Digital\n0 or 1\nRead with digitalRead()\nExample: LED state");
  accentFirstLine(digital, "#003DA5");
  const analogue = setText(presentation, 7, "TextBox 7", "Analogue\n0 ... 4095 on ESP32 ADC\nRead with analogRead()\nExamples: POT, LDR");
  accentFirstLine(analogue, "#B36B00");
  setText(presentation, 7, "TextBox 8", "Task 2 and Task 3 use GPIO 34 as an analogue input; GPIO 13 drives the LED.");

  // 8. Control-cycle workflow
  setTitle(presentation, 8, "Reading a Sensor in a Control Cycle");
  setTable(presentation, 8, "Table 3", [
    ["Step", "Use", "In Week 5"],
    ["Digital input", "GPIO", "LED output on GPIO 13"],
    ["Analogue input", "ADC channel", "Pot / LDR on GPIO 34"],
    ["Controller rule", "if / else", "Compare reading with threshold"],
    ["Diagnostic", "Serial Monitor", "Print raw value and state"],
  ]);
  const cycle = setText(presentation, 8, "TextBox 5", "Cycle: read -> classify -> update LED -> print -> wait 500 ms.\nThe code repeats this sequence continuously.");
  accentFirstLine(cycle, "#003DA5");

  // 9. Open loop evidence
  setTitle(presentation, 9, "Open-Loop Control: Task 1");
  await replaceImage(presentation, 9, "Picture 3", taskImage("Task 01 - Explore Open-Loop and Closed-Loop Control Examples"), "Task 1 Wokwi open-loop LED evidence");
  const openLoop = setText(presentation, 9, "TextBox 5", "No feedback\nGPIO 13 follows a fixed schedule.\nThe controller never asks whether the LED changed the environment.");
  accentFirstLine(openLoop, "#003DA5");
  setText(presentation, 9, "TextBox 7", "Code pattern\nHIGH -> wait 2 s -> LOW -> wait 2 s");
  const openResult = setText(presentation, 9, "TextBox 7", "Observed result\nSerial Monitor alternates:\nLED ON - waiting 2 seconds\nLED OFF - waiting 2 seconds");
  accentFirstLine(openResult, "#1A8A3E");

  // 10. Closed loop
  setTitle(presentation, 10, "Closed-Loop Control: Feedback");
  setTable(presentation, 10, "Table 3", [
    ["Property", "Week 5 example"],
    ["Setpoint", "Desired brightness"],
    ["Measured output", "LDR reading"],
    ["Error", "desired - measured"],
    ["Controller", "ESP32"],
    ["Actuator", "LED"],
    ["Disturbance", "Sunlight or shadow"],
  ]);
  setText(presentation, 10, "TextBox 5", "The LED acts, the sensor measures, and the next cycle can correct the difference.");
  const closed = setText(presentation, 10, "TextBox 7", "Closed loop requires the sensor to observe the controlled result. A manually moved LDR demonstrates the logic, but physical optical coupling matters.");
  accentFirstLine(closed, "#1A8A3E");
  await replaceImage(presentation, 10, "Picture 8", taskImage("Task 03 - Create an Automatic Lighting System Using an LDR Sensor"), "Task 3 Wokwi closed-loop lighting evidence");

  // 11. Error and feedback
  setTitle(presentation, 11, "Feedback and Control Error");
  setText(presentation, 11, "TextBox 3", "Negative feedback\nSetpoint - measured value = error\nThe controller uses the error to decide whether to increase, decrease, or hold the output.\nExample: desired brightness 1800; measured 1200; error +600");
  const errorBox = setText(presentation, 11, "TextBox 5", "Error formula\ne(t) = r(t) - y(t)\nr(t) = desired value\ny(t) = measured value");
  accentFirstLine(errorBox, "#B36B00");
  const designNote = setText(presentation, 11, "TextBox 7", "Design note\nFeedback rejects disturbances such as sunlight, shadows, or a changed load.");
  accentFirstLine(designNote, "#EC251D");
  setText(presentation, 11, "TextBox 8", "A positive error does not automatically mean ON; the rule must match the sensor direction and actuator.");

  // 12. Lab roadmap
  setTitle(presentation, 12, "The Four Tasks - One System");
  setTable(presentation, 12, "Table 3", [
    ["Task", "Add", "Input", "Result"],
    ["1", "Fixed LED", "None", "Open-loop ON/OFF"],
    ["2", "Threshold", "Pot GPIO 34", "Reading > 2048"],
    ["3", "Automatic light", "LDR GPIO 34", "Dark -> LED ON"],
    ["4", "Hysteresis", "Same LDR", "No rapid switching"],
    ["All", "ESP32 + LED", "Serial 115200", "Evidence in Wokwi"],
  ]);
  const labNote = setText(presentation, 12, "TextBox 5", "All tasks use ESP32 GPIO 13 for the LED and Serial Monitor at 115200 baud.");
  accentFirstLine(labNote, "#1A8A3E");

  // 13. Task 1 setup
  setTitle(presentation, 13, "Task 1 - Fixed-Time LED");
  await replaceImage(presentation, 13, "Picture 3", taskImage("Task 01 - Explore Open-Loop and Closed-Loop Control Examples"), "Task 1 Wokwi circuit and Serial Monitor evidence");
  setTable(presentation, 13, "Table 4", [
    ["Connection", "ESP32"],
    ["LED input", "GPIO 13 + 330R"],
    ["LED return", "GND"],
    ["Sensor", "None"],
  ]);
  const t1Callout = setText(presentation, 13, "TextBox 6", "Control type\nOpen loop: no sensor, no feedback.\nThe output stays unchanged even if the environment changes.");
  accentFirstLine(t1Callout, "#003DA5");
  setText(presentation, 13, "TextBox 7", "Captured Wokwi evidence: code, circuit, and alternating Serial Monitor messages.");

  // 14. Task 1 code
  setTitle(presentation, 14, "Task 1 - The Sketch");
  setCode(presentation, 14, "TextBox 4", "// Open-loop LED controller\nconst int LED_PIN = 13;\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  Serial.println(\"LED ON - waiting 2 seconds\");\n  delay(2000);\n\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"LED OFF - waiting 2 seconds\");\n  delay(2000);\n}");
  setText(presentation, 14, "TextBox 5", "Line by line\nGPIO 13 is an output.\nNo sensorRead() call exists.\nThe timer determines every transition.\nThat makes this open loop.");
  const t1Success = setText(presentation, 14, "TextBox 7", "Expected result\nLED ON for 2 s\nLED OFF for 2 s\nRepeat continuously.");
  accentFirstLine(t1Success, "#1A8A3E");

  // 15. Task 2 controller code
  setTitle(presentation, 15, "Task 2 - Threshold Controller");
  setCode(presentation, 15, "TextBox 4", "const int POT_PIN = 34;\nconst int LED_PIN = 13;\nconst int THRESHOLD = 2048;\n\nvoid loop() {\n  int reading = analogRead(POT_PIN);\n  if (reading > THRESHOLD) {\n    digitalWrite(LED_PIN, HIGH);\n    Serial.println(\"ON\");\n  } else {\n    digitalWrite(LED_PIN, LOW);\n    Serial.println(\"OFF\");\n  }\n  delay(500);\n}");
  setText(presentation, 15, "TextBox 5", "How it works\nGPIO 34 -> ADC reading\nCompare with 2048\nGPIO 13 -> LED\n500 ms sampling interval");
  const t2Serial = setText(presentation, 15, "TextBox 7", "Serial Monitor\nADC Reading: 1397 | LED State: OFF\n1397 <= 2048, so LED remains OFF.");
  accentFirstLine(t2Serial, "#1A8A3E");

  // 16. Task 2 result
  setTitle(presentation, 16, "Task 2 - Captured Result");
  await replaceImage(presentation, 16, "Picture 3", taskImage("Task 02 - Implement a Threshold-Based Controller"), "Task 2 Wokwi threshold controller evidence");
  const t2Rule = setText(presentation, 16, "TextBox 5", "Threshold decision\nreading > 2048 -> LED ON\nreading <= 2048 -> LED OFF");
  accentFirstLine(t2Rule, "#003DA5");
  setText(presentation, 16, "TextBox 6", "Observed run: ADC Reading 1397 | LED State: OFF");
  setText(presentation, 16, "TextBox 8", "reading = 1397;  // <= 2048\nLED state = OFF\nInput is a command, not feedback.");

  // 17. Task 3 sensor
  setTitle(presentation, 17, "Task 3 - Add the LDR Sensor");
  await replaceImage(presentation, 17, "Picture 3", taskImage("Task 03 - Create an Automatic Lighting System Using an LDR Sensor"), "Task 3 Wokwi LDR circuit and Serial Monitor evidence");
  setText(presentation, 17, "TextBox 4", "Sensor path\nAmbient light -> LDR -> ADC GPIO 34\nController: ESP32\nActuator: LED on GPIO 13\nWokwi: darker -> higher ADC value");
  setText(presentation, 17, "TextBox 5", "Task 3 turns the light on when the environment is classified as dark.");

  // 18. Task 3 result
  setTitle(presentation, 18, "Task 3 - Automatic Lighting");
  await replaceImage(presentation, 18, "Picture 3", taskImage("Task 03 - Create an Automatic Lighting System Using an LDR Sensor"), "Task 3 automatic lighting Wokwi evidence");
  setTable(presentation, 18, "Table 4", [
    ["Signal", "Pin", "Value"],
    ["LDR AO", "GPIO 34", "analogRead"],
    ["LED output", "GPIO 13", "ON / OFF"],
    ["Dark threshold", "-", "1500"],
    ["Captured reading", "-", "680 -> OFF"],
    ["Serial", "115200", "500 ms"],
    ["Rule", "-", "dark -> ON"],
  ]);
  const t3Rule = setText(presentation, 18, "TextBox 6", "Decision rule\nreading > 1500 -> ON\nelse -> OFF");
  accentFirstLine(t3Rule, "#003DA5");
  setText(presentation, 18, "TextBox 7", "Captured Wokwi result: LDR Reading 680 | Lighting State BRIGHT - LIGHT OFF.");

  // 19. Hysteresis concept
  setTitle(presentation, 19, "Hysteresis Stops Chatter");
  await replaceImage(presentation, 19, "Picture 3", taskImage("Task 04 - Test the Response Under Different Environmental Conditions"), "Task 4 Wokwi hysteresis evidence");
  const hyst = setText(presentation, 19, "TextBox 5", "The problem\nOne threshold can flip the LED when the reading wobbles.\nHysteresis creates a hold band: switch ON at a darker value and OFF at a brighter value.");
  accentFirstLine(hyst, "#003DA5");
  setText(presentation, 19, "TextBox 6", "Week 5 band: ON at >= 2000; OFF at <= 1200; hold the previous state between them.");

  // 20. Task 4 logic
  setTitle(presentation, 20, "Task 4 - Hysteresis Logic");
  setText(presentation, 20, "TextBox 3", "Objective\nTest bright, dark, and mid-range conditions without rapid on/off switching.");
  setCode(presentation, 20, "TextBox 5", "const int ON_AT = 2000;\nconst int OFF_AT = 1200;\nbool ledState = false;\n\nif (reading >= ON_AT) ledState = true;\nelse if (reading <= OFF_AT) ledState = false;\n\ndigitalWrite(13, ledState ? HIGH : LOW);");
  setTable(presentation, 20, "Table 6", [
    ["Reading", "Region", "LED"],
    [">= 2000", "DARK", "ON"],
    ["<= 1200", "BRIGHT", "OFF"],
  ]);
  const memory = setText(presentation, 20, "TextBox 8", "Closed loop with memory\nBetween 1200 and 2000, ledState is unchanged. This is the dead band.");
  accentFirstLine(memory, "#1A8A3E");
  setText(presentation, 20, "TextBox 9", "The held state is what prevents rapid switching near a boundary.");

  // 21. Task 4 test and result
  setTitle(presentation, 21, "Task 4 - Testing and Result");
  setText(presentation, 21, "TextBox 3", "How to test in Wokwi\nStart simulation.\nSet fully bright; record reading and LED.\nSet fully dark; record reading and LED.\nSweep near the thresholds.\nConfirm the LED holds its previous state.");
  await replaceImage(presentation, 21, "Picture 4", taskImage("Task 04 - Test the Response Under Different Environmental Conditions"), "Task 4 captured Wokwi result", "cover");
  setText(presentation, 21, "TextBox 5", "Captured result: Raw Reading 200 | BRIGHT | LED OFF");
  await replaceImage(presentation, 21, "Picture 6", taskImage("Task 04 - Test the Response Under Different Environmental Conditions"), "Task 4 Serial Monitor state log", "cover");
  setText(presentation, 21, "TextBox 7", "The code logs region and LED state every 500 ms.");
  const bright = setText(presentation, 21, "TextBox 9", "Below bright threshold\n200 <= 1200\nRegion: BRIGHT\nLED: OFF");
  accentFirstLine(bright, "#1A8A3E");

  // 22. Classification summary
  setTitle(presentation, 22, "Technical Classification of the Lab");
  setText(presentation, 22, "TextBox 3", "The sensor input, decision rule, and feedback relationship determine what each task demonstrates.");
  setTable(presentation, 22, "Table 4", [
    ["Task", "Controller type", "Input", "Observed result"],
    ["1", "Open loop", "None", "Fixed 2 s LED"],
    ["2", "Threshold", "Pot GPIO 34", "1397 -> OFF"],
    ["3-4", "Closed loop / hysteresis", "LDR GPIO 34", "680 -> OFF; 200 -> OFF"],
  ]);
  const classA = setText(presentation, 22, "TextBox 6", "Open loop\nNo sensor measures the result.\nThe timer is the controller.");
  accentFirstLine(classA, "#EC251D");
  const classB = setText(presentation, 22, "TextBox 8", "Closed loop requires coupling\nTasks 3-4 model feedback when the LDR observes the LED-affected environment.");
  accentFirstLine(classB, "#B36B00");

  // 23. PID bridge
  setTitle(presentation, 23, "From Thresholds to PID");
  setCode(presentation, 23, "TextBox 4", "error = setpoint - measured;\nintegral += error * dt;\nderivative = (error - previousError) / dt;\n\noutput = Kp * error\n       + Ki * integral\n       + Kd * derivative;");
  const pid = setText(presentation, 23, "TextBox 6", "Why PID matters\nP: present error -> immediate correction\nI: accumulated error -> remove offset\nD: error rate -> damping / anticipation\nA threshold gives ON/OFF; PID can vary output magnitude.");
  accentFirstLine(pid, "#EC251D");

  // 24. Troubleshooting
  setTitle(presentation, 24, "Troubleshooting");
  setTable(presentation, 24, "Table 3", [
    ["Symptom", "Likely cause", "Fix"],
    ["LED never changes", "Wrong GPIO or no GND", "Check GPIO 13, resistor, common ground"],
    ["ADC stays fixed", "Signal not on GPIO 34", "Check AO / SIG and run simulation"],
    ["LDR seems reversed", "Wokwi darkness raises reading", "Print raw value; recalibrate"],
    ["No Serial output", "Wrong baud", "Set monitor to 115200"],
    ["LED flickers", "Single threshold / narrow band", "Use 2000 ON and 1200 OFF"],
    ["Sketch will not compile", "Missing library / syntax", "Check sketch.ino and libraries"],
    ["Real hardware differs", "Simulation not calibrated", "Test bright/dark and retune"],
  ]);

  // 25. Extensions and takeaways
  setTitle(presentation, 25, "Extensions and Key Takeaways");
  setText(presentation, 25, "TextBox 3", "Build on Week 5\nReplace delay(500) with millis().\nAdd filtering or averaging for noisy ADC values.\nUse PWM for proportional LED brightness.\nCalibrate thresholds on real hardware.");
  setText(presentation, 25, "TextBox 4", "Go further\nConnect the LDR physically to the controlled light.\nAdd a setpoint and error calculation.\nLog readings as CSV for analysis.\nMove from threshold to P, PI, then PID.");
  const takeaways = setText(presentation, 25, "TextBox 7", "Week 5 takeaway\nSense -> decide -> act -> observe.\nOpen loop schedules output; closed loop uses feedback.\nHysteresis makes ON/OFF control stable.");
  accentFirstLine(takeaways, "#1A8A3E");

  // Render the complete deck and layouts for visual QA before export.
  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(`${previewDir}/${stem}.png`, await presentation.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(`${layoutDir}/${stem}.layout.json`, await (await slide.export({ format: "layout" })).text(), "utf8");
  }
  await writeBlob(montagePath, await presentation.export({ format: "webp", montage: true, scale: 1 }));

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(finalPptx);
  console.log(finalPptx);
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exitCode = 1;
});
