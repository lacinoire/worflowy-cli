const program = require('caporal');
var pjson = require('./package.json');

program
  .version(pjson.version)
  .option('-b, --bot-output', 'format output to use in telegram bot');

program
  .command('tree [n]', 'print your workflowy nodes')
  .argument('[n]', 'print up to depth n (default: 2', 2)
  .option('-i, --id <id/alias>', 'print sub nodes under the <id> (default: whole tree)', '')
  .option('-n, --withnote', 'print the note of nodes (default: false)', false)
  .option('-c, --hiddencompleted', 'hide the completed lists (default: false)', false)
  .option('-w, --withid', 'print id of nodes (default: false)', false)
  .option(', ', '')
  .action(function(args, options, logger){
    const mode = options.setup_mode || 'normal';
    env = env || 'all';
    console.log('setup for %s env(s) with %s mode', env, mode);
  });

program
  .command('capture')
  .description('add something to a particular node')
  .option('-p, --parentid <id/alias>', '36-digit uuid of parent (required) or defined alias')
  .option(', --name <str>', 'what to actually put on the node (required)')
  .option(', --priority=<int>', '0 as first child, 1 as second (default 0 (top)), (use a number like 10000 for bottom)', 0)
  .option(', --note=<str>', 'a note for the node (default "")', '')
  .action(function(args, options, logger){

  });

program
  .command('alias add')
  .description()
  .option(', ', '')
  .action(function(args, options, logger){

  });

program
  .command('')
  .description()
  .option(', ', '')
  .action(function(env, options){

  });

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option('-e, --exec_mode <mode>', 'Which exec mode to use')
  .action(function(cmd, options){
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  }).on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ deploy exec sequential');
    console.log('  $ deploy exec async');
  });

program.parse(process.argv);
