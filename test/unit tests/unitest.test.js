/* eslint-disable no-undef */
const {
  handleGit,
  handleError,
  handleHelp,
  stripInput,
  parseArgv
} = require('../../lib/utils/index.js');

describe('UTILS', () => {
  describe('HANDLE FIRST ARGV', () => {
    it('Should return same input if passed', () => {
      const returnedValue = handleGit('sample');
      expect(returnedValue).not.toBeUndefined();
      expect(returnedValue).toEqual('sample');
    });
    it('Should should return error text if input is not git or help', () => {
      const returnedValue = handleError('hello');

      expect(returnedValue).not.toBeUndefined();
      expect(returnedValue).toContain('hello');
    });

    it('should return help text when called', () => {
      const returnedValue = handleHelp();

      expect(returnedValue).toContain('askgit');
      expect(returnedValue).not.toBeUndefined();
    });
  });
  describe('STRIP GIVEN INPUT ', () => {
    let output;
    it('should return custom message if input is undefined or empty', () => {
      output = `A flag is missing a parameter, check to see if you need to pass a filename, commit message or some other parameter `;
      const returnedValue = stripInput('');
      expect(returnedValue).toEqual(output);
    });

    it('should return custom message if input is white spaces', () => {
      output = `You can't pass an empty filename or whitespaces`;
      const returnedValue = stripInput(' ');
      expect(returnedValue).toEqual(output);
    });

    it('should return the input if input passed is not undefined or whitespaces', () => {
      const returnedValue = stripInput('sample');
      expect(returnedValue).toEqual('sample');
    });
  });
  describe('HANDLE PARSING OF ARGVS', () => {
    it('should always return the fourth element of an array', () => {
      const returnedValue = parseArgv(['0', '1', '2', '3', '4']);
      expect(returnedValue).toEqual('3');
    });
  });
});
