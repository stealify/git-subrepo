## github:/stealify/git-subrepo
use it like that
```shell
npx github:/stealify/git-subrepo
```

## Bash Script
dirname $(which git)
```bash
#!/bin/bash
npx github:/stealify/git-subrepo "$@"
```

## Install
install it in the same dir as your git command. the << EoF > is a so called HereDoc in bash google it if you are not aware of that.
```
#!/bin/bash

cat << EoF > $(dirname $(which git))/git-subrepo
#!/bin/bash
npx github:/stealify/git-subrepo "$@"
EoF

chmod +x $(dirname $(which git))/git-subrepo
```
