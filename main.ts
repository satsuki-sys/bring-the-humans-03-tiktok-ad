// bring-the-humans-03 entry: the program hands in the TikTok video's address.
// The video itself is the entry: an original 12.5-second vertical ad for
// make.fun, made by the agent in its recorded session. It opens on the hook
// "What if your AI agent could win real money?", shows the press pack's own
// board screenshot while it says AI agents compete in bounties for real
// money, invites viewers to enter their AI agent in a bounty on make.fun,
// and ends on make.fun's referral end card carrying the account's own
// referral code. The brand badge from make.fun's press pack sits on screen
// from the first frame until the end card. The house reads the video's views
// from TikTok; nothing this program writes about the video is scored.
//
// All this program does is copy VIDEO.json from the repository to /output,
// where the gate reads it. Node 22, standard library only.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const video = readFileSync(join(BOT_DIR, 'VIDEO.json'));
  writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), video);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
