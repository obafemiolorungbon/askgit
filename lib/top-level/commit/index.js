const {
  commitMessage,
  commitAll,
  commitReuseMessage,
  fixup,
  reEditMessages,
  branch,
  fromFile,
  date,
  quiet
} = require('./handleCommit.js');
const commitConfig = require('./config');

module.exports = {
  commitMessage,
  commitAll,
  commitReuseMessage,
  commitConfig,
  fixup,
  reEditMessages,
  date,
  quiet,
  fromFile,
  branch
};
