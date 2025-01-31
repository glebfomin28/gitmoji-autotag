import {TCommit, TCommitEmojiConfig} from "./types";

export const MODULE_NAME = 'gitmoji-autotag';

export const commitTypes: Array<TCommit> = [
  "feat",
  "fix",
  "chore",
  "docs",
  "style",
  "refactor",
  "test",
  "perf",
  "ci",
  "build",
  "revert"
]


export const emojiConfig: TCommitEmojiConfig = {
  feat: "🚀",
  fix: "🐛",
  chore: "🔧",
  docs: "📝",
  style: "🎨",
  refactor: "♻️",
  test: "🧪",
  perf: "⚡",
  ci: "🤖",
  build: "🏗",
  revert: "🔙",
};

export const searchPlacesConfig = [
  'package.json',
  `${MODULE_NAME}.json`,
  `.${MODULE_NAME}rc.json`,
  `.${MODULE_NAME}rc.js`,
  `.${MODULE_NAME}rc.cjs`,
  `.${MODULE_NAME}rc.mjs`,
  `${MODULE_NAME}.config.js`,
  `${MODULE_NAME}.config.cjs`,
  `${MODULE_NAME}.config.mjs`,
];
