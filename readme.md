# supertest-koa-agent
> Converts a Koa app into a supertest compatible agent instance.

[![Build Status](http://img.shields.io/travis/wilmoore/node-supertest-koa-agent.svg)](https://travis-ci.org/wilmoore/node-supertest-koa-agent) [![Code Climate](https://codeclimate.com/github/wilmoore/node-supertest-koa-agent/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/node-supertest-koa-agent) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install supertest-koa-agent --save-dev
```

###### npm stats

[![npm](https://img.shields.io/npm/v/supertest-koa-agent.svg)](https://www.npmjs.org/package/supertest-koa-agent) [![NPM downloads](http://img.shields.io/npm/dm/supertest-koa-agent.svg)](https://www.npmjs.org/package/supertest-koa-agent) [![Dependency Status](https://gemnasium.com/wilmoore/node-supertest-koa-agent.svg)](https://gemnasium.com/wilmoore/node-supertest-koa-agent)

## API Example

```js
var agent = require('supertest-koa-agent');
var koa = require('koa')
agent(koa())
```

## API

### `agent(app)`

###### arguments

 - `app: (Application)` Koa application instance.

###### returns

 - `(Object)` Supertest agent instance.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/node-supertest-koa-agent.svg)](https://github.com/wilmoore/node-supertest-koa-agent/blob/master/license)
