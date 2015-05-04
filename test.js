'use strict'

/*!
 * imports.
 */

var koa = require('koa')
var test = require('tape-catch')

/*!
 * imports (local).
 */

var agent = require('./')(koa())

/*!
 * tests.
 */

test('agent()', function (t) {
  t.plan(1)
  t.assert(agent.app, 'Agent contains an app')
})
