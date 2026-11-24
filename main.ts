import { mkdirSync, writeFileSync } from "node:fs";

// A deadpan, real-sounding role paired with one absurdly specific duty.
// The gate counts characters, so the file holds exactly this line, no trailing newline.
const title: string = "Chief Investigator of Unexplained Office Plant Deaths";
const MAX_LENGTH = 60;

if (title.trim().length === 0 || [...title].length > MAX_LENGTH) {
  throw new Error("Entry must be non-blank UTF-8 text of 1 to 60 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title, "utf8");
