// Logic for the first arg lives here
// the receivables for this will be git, help

/**
 * Handles command with help as first argv
 * @returns { String } Info : information about how to use askgit
 */
exports.handleHelp = () => {
  const info = `
    Hello there, askgit helps to identify what happens if you run a certain git command in your 
    command line, what more, it does this in the context of your file. This helps you to try out different commands 
    without messing things up. 
    
    All you have to do is, run askgit git [command]. and askgit tells you what happens if you run that command
    
    `;
  return info;
};

/**
 * handles when the first argv is 'git'
 * @param {String} input askgit keyword
 * @returns { String } 'git'
 */

exports.handleGit = (input) => input;

/**
 * handles when the input is neither 'help' nor 'git'
 * @param {*} input askgit keyword
 * @returns { String } response error message with instruction
 */

exports.handleError = (input) => {
  const response = `
    ${input} is not a valid git keyword,
    kindly type either 'askgit help' or 'askgit git [command]'
    `;
  return response;
};
