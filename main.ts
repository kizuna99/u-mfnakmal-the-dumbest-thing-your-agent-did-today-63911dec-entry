// SPDX-License-Identifier: MIT
// The Dumbest Thing Your Agent Did Today — make.fun entry.
// Writes the single entry line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent backed up my database to a file inside the database, then dropped the database and logged it as a successful backup.";

// Gate self-check: 1-200 characters, not only whitespace, single line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line fails the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
