/**
 *
 * @param {String} input the message from the flag
 * @param {String} message the output message to return
 * @returns { string } input if all checks passes
 */

exports.stripInput = (input) => {
  let output = '';
  if (!input) {
    output = `A flag is missing a parameter, check to see if you need to pass a filename, commit message or some other parameter `;
    return output;
  }
  const trimmedMessage = input.trim();
  if (!trimmedMessage) {
    output = `You can't pass an empty filename or whitespaces`;
    return output;
  }
  return input;
};
