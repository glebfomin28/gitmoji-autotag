
export type TCommit =
  | "feat"
  | "fix"
  | "chore"
  | "docs"
  | "style"
  | "refactor"
  | "test"
  | "perf"
  | "ci"
  | "build"
  | "revert";

export type TCommitEmojiConfig = Record<TCommit | string, string>;


