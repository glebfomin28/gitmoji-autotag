# `gitmoji-autotag`

> cript for adding emoji before the commit message based on conventional commit types.

## Installation

```sh
npm i -D gitmoji-autotag
# or
yarn add -D gitmoji-autotag
```


## Usage

1. Install `husky`
2. Create a `commit-msg` in `.husky`
3. Added script `npx gitmoji-autotag $1`
4. Write your commit message:
   When you write your commit message, use the conventional commit types (e.g., feat, fix, chore, etc.) followed by a colon and the message. For example:
   ```txt
    feat: add new feature => 🚀 feat: add new feature
    fix: resolve bug => 🐛 fix: resolve bug
    chore: update dependencies => 🔧 chore: update dependencies
    ```
## Configuration

You can customize the emoji configuration by creating a configuration file in your project root. The configuration file can be named `gitmoji-autotag.json`, `.gitmoji-autotagr.json`, `.gitmoji-autotagr.js`, `.gitmoji-autotagr.cjs`, `.gitmoji-autotagr.mjs`, or `gitmoji-autotag.config.js`.

Example configuration file (gitmoji-autotag.config.js):

```js
module.exports = {
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
  // You can add custom fields
  custom: "🙌"
};
```
