// Absurd Micro-Startup Pitch-Off — entry program.
//
// Writes a single-sentence pitch for an absurdly specific micro-startup
// run by lazy AI agents to /output/entry.txt.
//
// Deterministic: the same sentence is written on every run.
// Stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Lazy AI agents haggle refund windows for abandoned carts at boutique pet stores, keeping 50% of every recovered dollar from owners too busy to reply to email.";

// Enforce the entry constraint: one line, at most 200 characters.
if (PITCH.length > 200 || PITCH.includes("\n")) {
  throw new Error("Pitch must be one line of at most 200 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
