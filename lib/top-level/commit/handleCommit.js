const { stripInput } = require('../../utils/stripInput.js');

exports.commitMessage = (commitMessage) => {
  const output = stripInput(commitMessage);
  if (output !== commitMessage) {
    return output;
  }
  const message = `What it does:
    This will 'save' or commit all the changes you have added using 'git add'.
    The message for this particular commit will be ${output} 
When should I use it:
  When you have made changes for a small functionality or a unit of feature in your
  code, then commit with the appropriate message that describes the changes you made

Examples:
  git commit -m "changes log in route implementation"
  git commit -m "fixes modal reopeing multiple times"
  git commit -m "feature: adds the reset password feature"
    `;
  return message;
};

exports.commitAll = () => {
  const message = `What it does:
    it stages all the files you have changed recently and then
    opens the editor for commit message

When should I use it:
    When you are done editing files and want the changes committed. 
    Usually with longer descriptions, otherwise the 'git commit -m <commit message>'
    is a less verbose option
Examples:
    git commit -A
    git commit --all
    `;
  return message;
};

exports.commitReuseMessage = (commit) => {
  const output = stripInput(commit);
  if (output !== commit) {
    return output;
  }
  const message = `What it does:
    This allows you to reuse the information of a previous commit 
    for a new commit. This means ${output}'s information will  be used for this commit, 
    its author, date and commit message 
    
When should I use it:
    Use this when you forgot to commit a change with its unit. Say you made code changes for 
    a feature and forgot to edit one more file, edit the file and then use the commit id to add this
    new change

Examples:
    git commit -C a3432a
    git commit -C d2109bd
    git commit -C d2109bd723d408c34d85bb2888bb3f850709297a
    `;
  return message;
};

exports.reEditMessages = (commit) => {
  const output = stripInput(commit);
  if (output !== commit) {
    return output;
  }
  const message = `What it does:
    This allows you to reuse the information of a previous commit 
    for a new commit. This means ${output}'s information will  be used for this commit, 
    its author, date and commit message. It will also open the editor to edit the message of ${output}
    
When should I use it:
    Use this when you forgot to commit a change with its unit. Say you made code changes for 
    a feature and forgot to edit one more file, edit the file and then use the commit id to add this
    new change

Examples:
    git commit -c a3432a
    git commit --reuse-message d2109bd
    git commit -C d2109bd723d408c34d85bb2888bb3f850709297a
    `;
  return message;
};

exports.fixup = (commit) => {
  const output = stripInput(commit);
  if (output !== commit) {
    return output;
  }
  const message = `What it does:
  This will allow you to change the content of the changes in the commit with ${output}. 
  Meaning, after you make changes and commit again, the changes will be under ${output}
  but will be a 'fixup' type of commit.

When should I use it:
  When you make a commit but forgot to edit some certain files that is supposed to be part of the commit.
  With fixup, you can easily edit that commit content, and then recommit it without creating a new commit.

Examples:
  git commit --fixup=a3432a
  git commit --fixup=d2109bd
  `;
  return message;
};

exports.branch = () => {
  const message = `What it does:
  This will show the branch information as part of the commit information.
  The commit information will be displayed in the editor. Editor is automatically
  opened.
When should I use it:
  This is mostly a precautionary measure to ensure that a commit is indeed on the 
  right branch. Use this as a flag when you want the editor open as you write your 
  commit message
Examples:
  git commit --branch 
  `;
  return message;
};

exports.fromFile = (filename) => {
  const output = stripInput(filename);
  if (output !== filename) {
    return output;
  }
  const message = `What it does:
  This will read the content of '${output}' and use the content of the file
  as the commit message. Meaning that what ever is in '${output}' will be used
  as the commit message.
When should I use it:
  For example, say you have files containing specific generic commit messaged suitable for a commit
  then you can easily use the commit message in those file for a commit. 
Examples:
  git commit -F issue58.txt
  git commit --file console_removal.txt
  git commit -F new_commit.txt  
  `;
  return message;
};

exports.quiet = () => {
  const message = `What it does:
  This will hide the information provided by the commit, which usually include files 
  commited and generally summaries of the commit.
When should I use it:
  It is usually just for suppresion and configure less verbosity (reduce output of operation).
  Therefore, it is advised not to use it under any circumstances as it commit summaries are important
  and they do not come with any cost.
Examples:
  git commit --quiet 
  git commit -q
  git commit -q -m "commit without summary"
  `;
  return message;
};

exports.date = (date) => {
  const output = stripInput(date);
  if (output !== date) {
    return output;
  }
  const message = `What it does:
  This will use the ${output} as the commit date instead of the current date.
  This is usually to override the author date used for this particular commit.
  Date passed should be a valid date in the format DD/MM/YYYY.
When should I use it:
  This can be used for several reasons, I guess one is to improve your github activity graph. But seriously,
  why would anyone want to change the author date of a commit?.
Examples:
  git commit --date 24/04/1997
  git commit --date 01/01/2001
  `;
  return message;
};
