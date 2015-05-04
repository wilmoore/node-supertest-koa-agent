# Contributing to supertest-koa-agent

Below are a few ways to make contributing to `supertest-koa-agent` smoother.

## Issues

When opening an issue for a bug, please include steps for reproducing the problem. _If we can't reproduce it, we can't fix it_. If you are suggesting a new feature, please provide a clear and detailed explanation.

## Setup

    git clone https://github.com/wilmoore/node-supertest-koa-agent.git
    cd node-supertest-koa-agent
    npm install
    npm run dev

## Tests

If you are adding a new feature, please include tests. The test suite for this project uses [tape](https://github.com/substack/tape). To run the test suite, type `npm test`. You may also run the development watcher (`npm run dev`) which uses [nodemon](http://nodemon.io) to re-run the test suite when files are modified. You can also get the raw tap output by running `node test`.

## Style

To keep a consistent coding style in the project, we're using [JavaScript Standard Style](https://github.com/feross/standard).

## Commits

When submitting pull requests please add a [well-written and clear commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) and squash your commits. This means being familiar with rebasing - if you are not, [this guide](https://help.github.com/articles/about-git-rebase/) should help you to get started. If you are still confused, feel free to ask for help.
