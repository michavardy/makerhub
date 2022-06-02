# GIT Tutorial

## table of contents
1. description
2. pre-req
3. setup
4. introduction
---
## description
- Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
---
## pre-req
- OS
---
## setup
1. open up your terminal of choice
2. type git to make sure that you have git
3. set up a projects directory in your desired sub directory
4. cd into your projects directory
5. type git clone https://github.com/michavardy/makerhub
6. go to https://cli.github.com/
7. download for windows 
8. open up terminal and type gh to make sure it works
9. go to https://github.com and set up an account
---
## demonstration
### **add** : *adds new files to git*
```
    git add .
```
### **status** : *checks status*
```
    git status
```
### **commit** : *commits new status*
```
    git commit -m "message"
```
---
## **Tutorial**
### add / status / commit 
1. cd into makerhub directory
2. add a new sub directory called test
3. add a new file in subdirectory test called test1.txt
4. add the first sentence of [lorem ipsum](https://www.lipsum.com/feed/html) to test1.txt
5. type  git add .
6. type  git status
   - verify that you have staged changes to be commited
7. type git commit -m "test"
    - verify that there were changes made to main
### github fork
1. delete makerhub directory
2. go to projects directory
3. type gh repo fork http://github.com/michavardy/makerhub
### git branch
1. type git branch
   - verify that you are in the main branch
   - verify that there are no other branches
2. type git checkout -b test_branch
3. type git branch
   - verify that you are in the test_branch
   - verify that there is the main branch
4. add a new subdirectory called branch_test
5. add a new file to the subdirectory called branch_test.txt
6. add the first sentence of [lorem ipsum](https://www.lipsum.com/feed/html) to branch_test.txt
7. commit these changes
8. type git checkout main
9. type git branch
   - verify that you have transfered branches to the main branch
10. type ls
    - verify that the sub directory branch_test is not here (its in the test_branch branch)
### git pr
1. type gh pr create 
2. follow prompt to create pr
---
## simple exercise
1. makerhub contribution
   - add a new directory to makerhub fork
2. branch
   - make a new branch to makerhub call it by your name
   - issue a pr
3. contribution
   - find a very simple github repo and fork it
   - make a small change
   - issue a pr

---
## Cheat sheet Construction
- make a cheat sheet with all relevant commands
