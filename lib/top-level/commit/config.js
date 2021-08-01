exports.config = (parser, argvs) => {
  let args = '';
  parser
    .option('-m, --message <message>', 'Add all files to current working tree')
    .option('-a,  --all', 'all files changed or modified are to be staged')
    .option('-C, --reuse-message <commit>', 'use the given commit info for new commit')
    .option('-c, --reedit-message', 'same with using -C but this time the editor is lauched')
    .option(
      '--fixup=<commit>',
      'this changes the content of the commit passed to it without altering the commit message'
    )
    .option('--branch', 'shows the branch as part of the information displayed in the editor')
    .option(
      '-F, --file <filename>',
      'Extract the text in the given file and use it as commit message'
    )
    .option('--date=<date>', 'use this provided date for commit instead of current date')
    .option('-q,--quiet', 'hide all the resulting meta data from the commit')
    .command('add')
    .argument('[filename]')
    .action((filename) => {
      args = filename;
    });
  parser.parse(argvs);
  const options = parser.opts();
  const parsed = {
    options,
    commands: args
  };
  return parsed;
};
