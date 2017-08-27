#! /usr/bin/env node
'use strict';

const program = require('commander');
const { description, version } = require('../package.json');
const { toGlobalId, fromGlobalId } = require('./logic');

program
  .version(version)
  .description(description)
  .usage('<command> [args]');

program
  .command('toGlobalId <type> <id>')
  .description('Takes a type name and an ID specific to that type, and returns a global ID that is unique among all types')
  .action((type, id) => {
    const globalId = toGlobalId(type, id);
    console.log('> Global ID: %s', globalId);
  });

program
  .command('fromGlobalId <globalId>')
  .description('Takes the global ID created by toGlobalID, and returns the type name and ID used to create it')
  .action(globalId => {
    const { type, id } = fromGlobalId(globalId);
    console.log('> Type: %s\n> ID: %s', type, id);
  });

program.parse(process.argv);

if (process.argv.length < 2) {
  program.outputHelp();
}
