#! /usr/bin/env node
'use strict';

const base64 = i => new Buffer(i, 'utf8').toString('base64');

const unbase64 = i => new Buffer(i, 'base64').toString('utf8');

module.exports = { base64, unbase64 };
