const { handleFirstArgv } = require('../../lib/index.js');
/* eslint-disable no-undef */

describe('HANDLE THE FIRST ARGUEMENT', () => {
  it('Should return git if input is git', () => {
    const returnedValue = handleFirstArgv('git');
    expect(returnedValue).toEqual('git');
    expect(returnedValue).not.toBeUndefined();
  });

  it('should return help text if input is help', () => {
    const returnedValue = handleFirstArgv('help');
    expect(returnedValue).not.toBeUndefined();
    expect(returnedValue).toContain('askgit');
    expect(returnedValue).toContain('Hello');
  });

  it('should return error message if input is neither help or git', () => {
    const returnedValue = handleFirstArgv('non');
    expect(returnedValue).toContain('valid');
    expect(returnedValue).toContain('help');
  });
});
