/* eslint-disable no-undef */
const { handleGit, handleError, handleHelp } = require('../../lib/parseFirstArg.js');

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
