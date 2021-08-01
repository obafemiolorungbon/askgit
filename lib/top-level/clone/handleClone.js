const { stripInput } = require('../../utils/stripInput.js');

exports.local = (repo) => {
  const { url, toUrl } = repo;
  const cloneTo = toUrl || 'the current directory';
  const output = stripInput(url);
  if (output !== url) {
    return output;
  }
  const message = `What it does:
    This will clone the content of ${output} into ${cloneTo}. ${output} should be a 
    url pointing to a directory in your local machine.
When should I use it:
    This can be used to make copies of the local repository, probably for back up and or maybe to use as template.
    Note that this will like the remote clone by also ignoring files in the .gitigonore.
Examples:
    git clone --local C:/user/dev/project
    `;
  return message;
};

exports.filter = (filters, repo) => {
  const { url, toUrl } = repo;
  const cloneTo = toUrl || 'the current directory';
  const strippedUrl = stripInput(url);
  const filterOutput = stripInput(filters);
  if (strippedUrl !== url) {
    return strippedUrl;
  }
  if (filterOutput !== filters) {
    return filterOutput;
  }
  const message = `What does it do:
  This will clone the content of '${strippedUrl}' to ${cloneTo} but will apply '${filterOutput}' to limit what 
  is cloned. Depending on what the rule in ${filterOutput} is, the content of the new repository
  will vary. the filter specification can be of the following form
  --filter=blob:none To ommit all file content from the clone
  *--filter=object:type=(blob|commit|tags) clone will only include the listed types/specifications
When to use it:
  The filter flag is important for when you only want a subset of the content of a directory.
Examples:
  git clone --filter=blob:none https://github.com/sample-directory.git  
  `;
  return message;
};

exports.origin = (name, repo) => {
  const { url, toUrl } = repo;
  const cloneTo = toUrl || 'the current directory';
  const output = stripInput(url);
  const filteredName = stripInput(name);
  if (output !== url) {
    return output;
  }
  if (filteredName !== name) {
    return filteredName;
  }
  const message = `What does it do:
  This will clone the content of '${output}' to ${cloneTo} and then set '${filteredName}' as 
  reference to origin. So that instead of refering to origin, you refer to ${filteredName}  
When to use it:
  This is mostly to configure the name of the upstream. Therefore consider it as
  customization.
Example:
  git clone --origin game https://github.com/gitUser/git-repo.git
  `;
  return message;
};

exports.branch = (name, repo) => {
  const { url, toUrl } = repo;
  const cloneTo = toUrl || 'the current directory';
  const strippedUrl = stripInput(url);
  const filteredName = stripInput(name);
  if (strippedUrl !== url) {
    return strippedUrl;
  }
  if (filteredName !== name) {
    return filteredName;
  }
  const message = `What does it do:
  This will set '${filteredName}' as the checkout branch when the content of '${strippedUrl}'
  is cloned into ${cloneTo}. Which means the branch you will find as selected will be '${filteredName}'
When should I use it:
  This is mostly a choice, and serves as the combination of running both
  git clone '${strippedUrl}'
  git checkout '${filteredName}'
Examples:
  git clone --branch development https://github.com/gitUser/git-repo.git
  `;
  return message;
};

exports.depth = (depth, repo) => {
  const { url, toUrl } = repo;
  const cloneTo = toUrl || 'the current directory';
  const strippedUrl = stripInput(url);
  const filteredDepth = stripInput(depth);
  if (strippedUrl !== url) {
    return strippedUrl;
  }
  if (filteredDepth !== depth) {
    return filteredDepth;
  }
  const message = `What does it do:
  This will clone the contents of '${strippedUrl}' into ${cloneTo} but the new repository will only have the 
  last ${filteredDepth} commit history. Meaning the commit history of the cloned repository
  will be equal to ${filteredDepth}
When do I use it:
  This can be applied when cloning a repository with a very long commit history and the most 
  relevant to you are the recent n-commits. This will ensure that when you run 
  git log 
  The resulting logs will be short and according to your needs
Examples:
  git clone --depth 5 https://github.com/gitUser/git-repo.git
  `;
  return message;
};

exports.shallowTime = (date, repo) => {
  const { url, toUrl } = repo;
  const cloneTo = toUrl || 'the current directory';
  const strippedUrl = stripInput(url);
  const filteredDate = stripInput(date);
  if (strippedUrl !== url) {
    return strippedUrl;
  }
  if (filteredDate !== date) {
    return filteredDate;
  }
  const message = `What does it do:
  This will clone the content of '${strippedUrl}' into ${cloneTo} but the commit history will be those after '${filteredDate}' (if valid).
   The resulting new repo is a copy of '${strippedUrl}' but the commit history is truncated
When should I use it:
  This should come handy when you need a copy of a repository but not interested in the entire commit logs. 
  Therefore, you can select the history that concerns you using a date a delimiter.
Examples:
  git clone --shallow-since 22/2/2020 https://github.com/gitUser/git-repo.git
  `;
  return message;
};
