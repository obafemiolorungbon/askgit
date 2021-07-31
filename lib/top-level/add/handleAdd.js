// Here Lives every thing concerning git add

/**
 * takes care of add when the arguement used is --a, -A or .
 * @returns { string } message an appropriate message for add command
 */
exports.addAll = () => {
  const message = `What it does:
    This will add all the files you have changed recently, i.e since your last commit, to your staged area.
    This will not include files in your .gitignore file

When should I use it:
    When you have just finished making changes and you want to commit all of them.
    
Examples:
    git add --a 
    git add -A
    git add .
    `;
  return message;
};

/**
 *
 * @param {string} args the file names passed to add
 */
exports.addFile = (args) => {
  let message;
  if (!args) {
    message = `Pass a filename to add the file or . to add all changed files `;
    return message;
  }
  const arg = args.trim();
  if (!arg) {
    message = ` Pass a filename to add the file or . to add all changed files `;
    return message;
  }
  if (arg.split('.').length > 1) {
    message = `What it does:
  This will add the file '${args}' to the your staged area. Meaning '${args}' will be committed next time
  you run git commit

When should I use it:
  When you made changes to many files, but you only want a particular one to be commited
  
Examples:
  git add file.txt
  git add code.py
  git add foo.js
  `;
    return message;
  }
  message = `What it does:
  This will add the directory '${args}' to the your staged area. Meaning '${args}' will be committed next time
  you run git commit

When should I use it:
  When you made changes to many files, but you only want a particular one to be commited
  
Examples:
  git add file.txt
  git add code.py
  git add foo.js
  `;

  return message;
};
