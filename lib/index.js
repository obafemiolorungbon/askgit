const { handleGit, handleError, handleHelp } = require('./utils/parseFirstArg.js');
const { add, commit, clone } = require('./top-level/index.js');

const { parseArgv } = require('./utils/parseGitBaseCommand.js');
/**
 * handles the first argv in the command line
 * @param {String} input
 * @returns appropriate response
 */

exports.handleFirstArgv = (input) => {
  if (input === 'git') {
    return handleGit(input);
  }
  if (input.toLowerCase() === 'help') {
    return handleHelp();
  }
  return handleError(input);
};

let message = '';

exports.handleTopLevel = (processArgs, object) => {
  const command = parseArgv(processArgs);
  if (command === 'add') {
    message = add(object, processArgs);
    return message;
  }
  if (command === 'commit') {
    message = commit(object, processArgs);
    return message;
  }
  if (command === 'clone') {
    message = clone(object, processArgs);
    return message;
  }

  throw new Error('Command Invalid');
};
