import fs from "fs/promises";

async function readLines() {
  const content = await fs.readFile("data.txt", "utf-8");
  const lineCount = content.split("\n").length;
  console.log(`Number of lines: ${lineCount}`);
}

readLines();
