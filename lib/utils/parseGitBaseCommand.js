// parse the first command that comes after the git command

/**
 *
 * @param {string} processArgv The process.argv received
 * @param {object} parser the object to be used for parsing
 */

exports.parseArgv = (processArgs) => processArgs[3];
