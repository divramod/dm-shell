# dm-shell
A helper for interacting with the shell in nodejs.

## contribute
```bash
# install dm-shell globally
npm install -g dm-shell

# fork dm-shell.git: https://github.com/divramod/dm-shell

# clone your fork
git clone git@github.com:your_github_username/dm-shell.git

# cd into repository
cd dm-shell

# npm install
npm install

# link the global dm-shell installation to the local repository you cd'ed into
dm-shell local

# create synchronous task with tests
# dm-shell taskAdd [sync [taskName]]
dm-shell taskAdd sync your_task_name

# create asynchronous tasks with test (wrapped in co)
# dm-shell taskAdd [asyn [taskName]]
dm-shell taskAdd async your_task_name

# run tests
dm-shell test your_task_name

# edit tasks/your_task_name/index.js

# edit tasks/your_task_name/test/test.js

# create a pull request: https://help.github.com/articles/creating-a-pull-request/
```
