import fs from "node:fs/promises";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const sourcePptx = "D:/Sao lưu/Udemy/work/3707ict-automation-and-iot/Week 04 - Sensors and Actuators/Wk04-Workshop.pptx";
const outputPath = "D:/Sao lưu/Udemy/work/presentations/week05-automation-systems/template-inspect/template-inspect.ndjson";

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePptx));
const inspection = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart",
  maxChars: 1000000,
});
await fs.writeFile(outputPath, inspection.ndjson || "", "utf8");
console.log(`wrote ${outputPath}`);
