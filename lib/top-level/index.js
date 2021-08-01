// all top level commands will converge here
// for add
const { addAll, addFile, config } = require('./add/index.js');
const {
  commitConfig,
  commitMessage,
  commitReuseMessage,
  commitAll,
  fixup,
  reEditMessages,
  branch,
  quiet,
  fromFile,
  date
} = require('./commit/index.js');

const {
  cloneConfig,
  filter,
  local,
  depth,
  cloneBrach,
  shallowTime,
  noTags,
  origin
} = require('./clone/index.js');

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

exports.commit = (object, processArgs) => {
  const commitConfigured = commitConfig(object, processArgs);
  const { options, commands } = commitConfigured;
  if (options.message) {
    return commitMessage(options.message);
  }
  if (options.all) {
    return commitAll();
  }
  if (options.reuseMessage) {
    return commitReuseMessage(options.reuseMessage);
  }
  if (options.reeditMessage) {
    return reEditMessages(options.reeditMessage);
  }
  if (options.fixup) {
    return fixup(options.fixup);
  }
  if (options.branch) {
    return branch();
  }
  if (options.date) {
    return date(options.date);
  }
  if (options.file) {
    return fromFile(options.file);
  }
  if (options.quiet) {
    return quiet(options.quiet);
  }
  return 'Not yet implemeted';
};

exports.clone = (object, processArgs) => {
  const commitConfigured = cloneConfig(object, processArgs);
  const { options, commands } = commitConfigured;
  console.log(commands);
  console.log(options);
  if (options.local) return local(commands);
  if (options.filter) return filter(options.filter, commands);
  if (options.depth) return depth(options.depth, commands);
  if (options.branch) return cloneBrach(options.branch, commands);
  if (options.shallowSince) return shallowTime(options.shallowSince, commands);
  if (options.origin) return origin(options.origin, commands);
  return 'This feature has not been implemented, maybe open an issue or pull request';
};
