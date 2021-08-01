const parser = require('commander');
const { handleFirstArgv, handleTopLevel } = require('./lib/index.js');
// TODO
// What Happens

// 1. handle the help or git command or invalid command : DONE
// 1. When someone runs askgit git config and all that, it tells them what happens to their
// project specifically

const firstArg = process.argv[2];

if (handleFirstArgv(firstArg) === firstArg) {
  console.log(handleTopLevel(process.argv, parser));
  // logic for when git is passed as first help
}
if (handleFirstArgv(firstArg).includes('valid')) {
  console.log(handleFirstArgv(firstArg));
  // logic for when it was an invalid input
}
if (handleFirstArgv(firstArg).includes('Hello')) {
  console.log(handleFirstArgv(firstArg));
  // logic for when the input is help
}
