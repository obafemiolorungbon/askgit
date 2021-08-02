const parser = require('commander');
const { handleFirstArgv, handleTopLevel } = require('./lib/index.js');

let firstArg;
try {
  // eslint-disable-next-line prefer-destructuring
  firstArg = process.argv[2];
} catch (error) {
  console.log('An error occured, check that you are using askgit properly, run askgit help');
}

if (handleFirstArgv(firstArg) === firstArg) {
  console.log(handleTopLevel(process.argv, parser));
}
if (handleFirstArgv(firstArg).includes('valid')) {
  console.log(handleFirstArgv(firstArg));
}
if (handleFirstArgv(firstArg).includes('Hello')) {
  console.log(handleFirstArgv(firstArg));
}
