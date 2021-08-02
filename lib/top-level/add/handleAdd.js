const { stripInput } = require('../../utils/stripInput.js');
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
  const output = stripInput(args);
  if (output !== args) {
    return output;
  }
  let message = '';
  if (output.split('.').length > 1) {
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
  This will add the directory '${output}' to the your staged area. Meaning '${output}' will be committed next time
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
