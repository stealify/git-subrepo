#!/usr/bin/env node

require('node:child_process').exec(__dirname+'/lib/git-repo'
                                  // [, options][, callback]
                                  )
