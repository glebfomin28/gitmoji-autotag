#!/usr/bin/env esno

import { runCommitProcessing } from "./gitmoji-autotag-formatter";

(async () => {
  await runCommitProcessing();
})();
