# Contributing guide

Fist off: if you feel like contributing, thank you! 🤩 
Your contribution can help this project improve!
Please read these guidelines, so that I can analyze your PR more quickly and (hopefully) merge it.

## Bug report
To report a bug, please open an issue following the related template, compiling it with all the information you have, and please be as specific as possibile to avoid any confusion.

## Feature request
To request a feature, please open an issue following the related template. Be as specific as possibile in order to avoid confusion.

## Pull Request
Feel free to open a PR, and please focus it on only one feature/bug/argument in order to help me accept and merge it. If the PR is big, please open an issue here requesting a new feature expressing your wish to open a PR in order to
avoid any unnecessary work. 

If you want to submit a PR, please follow these steps:
1. Fork the project, clone your fork and configure the remotes:
    ```
    # Clone your fork of the repo into the current directory    
    git clone https://github.com/<your-username>/<repo-name>
    # Navigate to the newly cloned directory
    cd <repo-name>
    # Assign the original repo to a remote called "upstream"
    git remote add upstream https://github.com/elisabetta-p/<repo-name>
    ```
2. If you cloned some time ago, be sure to be up to date:
   ```
   git checkout master
   git pull upstream master
   ```
3. Create a new topic branch (from the main development branch) to contain your feature, fix or change:
    ```
    git checkout -b <topic-branch-name>
    ```
4. Be sure your code is well documented, otherwise is unlikely your PR will be accepted
5. Push your topic branch up to your fork:
    ```
    git push origin <topic-branch-name>
    ```
6. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description


Thank you for choosing to help me with this project! 🥳 

Any help is always appreciated, and thanks for deciding to spend some of your precious time improving this small project 

(inspiration from this contributing guides taken from [hoodie](https://github.com/hoodiehq/hoodie/blob/master/CONTRIBUTING.md))