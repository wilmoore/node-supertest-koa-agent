'use strict'

/*!
 * imports.
 */

var agent = require('supertest-koa-agent')
var app = require('./')

/*!
 * tape runner.
 */

require('tape-runner')([
  agent(app())
])
