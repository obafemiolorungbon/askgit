// configure the commander with the following expected options

/**
 * configures the parser object with add options
 * @param {object} parser the parser object to be configured
 * @returns {parser} the parser object
 */

exports.config = (parser, argvs) => {
  let args = '';
  parser
    .option('-A, --all', 'Add all files to current working tree')
    .option('.,  every', 'add a specific file to staged area')
    .command('git')
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
