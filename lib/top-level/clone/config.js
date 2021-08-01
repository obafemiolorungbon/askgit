module.exports = (parser, argvs) => {
  const args = {};
  parser
    .option('-l, --local', 'clone the content of a local repository')
    .option('--filter [filters]', 'limit the content cloned by filtering using a filter')
    .option(
      '-o, --origin [name]',
      'point to the provided name as upstream branch instead of origin'
    )
    .option(
      '-b, --branch [name]',
      'set the checked out branch/ current branch/ selected to the provided branch name instead of the one checked out in the cloned repository'
    )
    .option(
      '--depth [depths] [repo]',
      'create a clone of the repository, with the new repository only having history numbers equal to the depth passed'
    )
    .option(
      '--shallow-since [date]',
      'create a shallow clone where the history included in the new repository are ones after the provided date'
    )
    .command('git')
    .command('clone')
    .argument('[url]')
    .argument('[newUrl]')
    .action((url, newUrl) => {
      args.url = url;
      if (newUrl) {
        args.toUrl = newUrl;
        return;
      }
      args.newUrl = '';
    });
  parser.parse(argvs);
  const options = parser.opts();
  const parsed = {
    options,
    commands: args
  };
  return parsed;
};
