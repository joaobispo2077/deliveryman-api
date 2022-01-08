Install TS

yarn add typescript @types/node -D

generate TS Config file

yarn tsc --init

---

To setup linters install:

yarn add prettier eslint eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import-helpers -D

create config files

---

Prepare commit lint

yarn add lint-staged -D

add command to package.json

create config file .lintstagedrc.js

yarn add husky -D

npx husky install

npx husky add .husky/pre-commit "npm run commit:lint"
