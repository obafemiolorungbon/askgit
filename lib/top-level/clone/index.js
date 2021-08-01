const cloneConfig = require('./config.js');
const { local, filter, depth, branch, shallowTime, noTags, origin } = require('./handleClone.js');

module.exports = {
  local,
  filter,
  cloneConfig,
  depth,
  shallowTime,
  noTags,
  origin,
  cloneBrach: branch
};
