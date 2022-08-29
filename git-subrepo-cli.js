#!/usr/bin/env node

require('node:child_process').exec(__dirname+'/lib/git-subrepo '+process.argv.slice(1), { stdio: "inhire"},
(error, _stdout, _stderr) => (error) && console.error(`exec error: ${error}`));
