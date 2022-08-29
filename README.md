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
install it in the same dir as your git command.
```
#!/bin/bash
echo "#!/bin/bash" > $(dirname $(which git))
echo 'npx github:/stealify/git-subrepo "$@"' >> $(dirname $(which git))
```
