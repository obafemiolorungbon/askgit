const { parseArgv } = require('./parseGitBaseCommand.js');
const { handleError, handleHelp, handleGit } = require('./parseFirstArg.js');
const { stripInput } = require('./stripInput.js');

module.exports = { parseArgv, handleError, handleGit, handleHelp, stripInput };
