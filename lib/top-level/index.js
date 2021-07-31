// all top level commands will converge here

// for add

const { addAll, addFile, config } = require('./add/index.js');

exports.add = (object, processArgs) => {
  const addConfigured = config(object, processArgs);
  const { options, commands } = addConfigured;
  if (options.all) {
    return addAll();
  }
  if (commands === '.') {
    return addAll();
  }
  return addFile(commands);
};
