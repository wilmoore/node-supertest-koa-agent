'use strict'

/*!
 * imports.
 */

var Koa = require('koa')
var test = require('tape-catch')

/*!
 * Initializing koa app
 */
var app = new Koa()

/*!
 * imports (local).
 */

var agent = require('./')(app)

/*!
 * tests.
 */

test('agent()', function (t) {
  t.plan(1)
  t.assert(agent.app, 'Agent contains an app')
})
