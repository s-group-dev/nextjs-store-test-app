This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Graphql queries

Add queries to a `*.graphql` file in `./graphql` then run generate to get defined types.

```bash
npm run generate
```

## Commit messages

```bash
  Your commit message must be formatted as

  Format: <type>(<scope>): <subject>

    feat(hat): add hat wobble
       ^         ^------------^
       |            |
       |            +-> Summary in present tense.
       |
       +----------> Type: build chore ci docs feat fix perf refactor revert style test

```

## Message summary

Use present tense.

**Wrong**: `Created new variable`<br>
**Correct**: `Create new variable`

## Commit types

| Commit Type | Title                    | Description                                                                                            | Release                        | Include in changelog |
| :---------: | ------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------ | :------------------: |
|   `feat`    | Features                 | A new feature                                                                                          | `minor`                        |        `true`        |
|    `fix`    | Bug Fixes                | A bug Fix                                                                                              | `patch`                        |        `true`        |
|   `docs`    | Documentation            | Documentation only changes                                                                             | `patch` if `scope` is `readme` |        `true`        |
|   `style`   | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) | -                              |        `true`        |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature. Fixing typos.                               | -                              |        `true`        |
|   `perf`    | Performance Improvements | A code change that improves performance                                                                | `patch`                        |        `true`        |
|   `test`    | Tests                    | Adding missing tests or correcting existing tests                                                      | -                              |        `true`        |
|   `build`   | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)    | `patch`                        |        `true`        |
|    `ci`     | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: gitlab, scripts)                    | -                              |        `true`        |
|   `chore`   | Chores                   | Other changes that don't modify src or test files                                                      | -                              |        `true`        |
|  `revert`   | Reverts                  | Reverts a previous commit                                                                              | -                              |        `true`        |
