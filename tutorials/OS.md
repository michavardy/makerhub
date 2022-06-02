# Operating system Tutorial

## table of contents
1. description
2. setup
3. demonstration
---

## description
- An **Operating System** (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. 
[1] https://en.wikipedia.org/wiki/Operating_system

- A **Shell** is a computer program which exposes an operating system's services to a human user or other programs.  Operating system shells use either a command-line interface (CLI) or graphical user interface (GUI)
[2] https://en.wikipedia.org/wiki/Shell_(computing)

- **Shell** is a macro processor which allows for an interactive or non-interactive command execution.
[3] https://linuxconfig.org/bash-scripting-tutorial-for-beginners

- **Command-Line Interface** (CLI) recieves commands from a user in the form of lines of text. 
[4] https://en.wikipedia.org/wiki/Command-line_interface

- **Graphical-User Interface** GUI is a form of user interface that allows users to interact with electronic devices through graphical icons and audio indicator such as primary notation
[5] https://en.wikipedia.org/wiki/Graphical_user_interface

- **Bash**  is a command language interpreter. [6]https://linuxconfig.org/bash-scripting-tutorial-for-beginners
  
- **Directory**  is a file system cataloging structure which contains references to other computer files, and possibly other directories [7] https://en.wikipedia.org/wiki/Directory_(computing)
---

## setup
1. go to official website: https://gitforwindows.org/
2. Download installer
3. Install
4. Open Bash terminal
---
## explination
- **path** is A reference to a location in a directory system
- **user** Some operating systems restrict a user's access only to their home directory or project directory
- **tree data structure**
> In computer science, a tree is a widely used abstract data type that represents a hierarchical tree structure with a set of connected nodes. 
> Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the root node, which has no parent. 
---
## demonstration
- **date** : *show current date*
- **pwd** : *current working directory*
- **ls** : *list directory*
- **cd** : *change directory*
  - *arguments*
  - .. : go back a directory
- **mkdir** : *make directory*
- **grep** : *Global regular expression print*
- **rm** : *remove file*
  - *arguments*
  - -rf : force remove directory
- **touch** : create document
- **vim** : text editor (this is a very large rabbit hole)
- **cat** : print document text to terminal
- **mv** : move directory, file, also works to rename
- **cp** : copy directory or file to another directory

---
## Tutorial
### Initial Commands
1. open bash terminal
2. type in date
3. type in pwd
4. type in ls
### directory structure
1. open bash terminal
2. type in cd ~
   - this is your home directory
   - ~ symbol is an alias short cut
3. type in pwd
    - this will show you your current working directory path
    - this is the true path of your home
4. type in ls
   - this will list all of the sub-directories in your home directory
5. type in mkdir test
    - you have now created a new directory called test
    - remember that you are in your home directory
6. type in ls
   - verify that your new directory test is in the list
7. type in ls|grep test
   - you can search specifically for this new directory using | grep test
   - | is a pipe symbol, it pass's the list in ls to grep
   - grep is a search function it takes an argument of what you are trying to search
   - test is the word that you are trying to search
8. type in cd te
9. press tab to auto complete test
10. press enter
   - you have now entered the test directory
11. type in pwd
    - see that you are currently in your test subdirectory in your home directory
12. type in cd ..
    - you have now gone back into your home directory
13. type in pwd
    - check that you are in your home directory
14. type in rm test, press tab for auto complete
15. type in -rf as arguments
16. press enter
17. press ls to verify that the test directory has been removed
### file creation, how to exit vim
1. go to your home directory
2. type in mkdir test1
3. type in touch test_doc.txt
    - you have created your first document
    - the type of document is a text document shown by .txt
4. type in vim test_doc.txt
    - you have entered a program called vim
    - under adult supervision :)
5. type in i
    - you have entered insert mode
6. type in test
    - enter in text
7. press esc 2 times
   - escape typing mode, you are in edit mode
8. type in :wq
    - you save and exit vim
9. type in ls 
    - verify that your new document test_doc.txt is in your directory
10. type in cat tes
    - press tab to auto complete
    - verify that the text you typed in the document is printed to the terminal
### copy, move, rename
1. go to directory ~/test1
2. type in mkdir test2 to create a subdirectory
3. type in ls 
   - verify that there is one file called test_doc.txt
   - verify that there is one sub-directory called test2
4. type in mv test_doc.txt ./test2
   - you have moved test doc into test2 subdirectory
5. type in ls
   - verify that there is only test2 sub directory 
6. type in ls ./test2
   - veryify that test_doc.txt was moved into test2
7. type in cp ./test2/test_doc.txt ./
8. type in ls
   - verify that there is a file called test_doc.txt
9. type in ls ./test2
    - verify that there is also a file called test_doc.txt inside test2
10. type in mv test_doc.txt test_doc2.txt
11.  type in ls
   - verify that there is a file called test_doc2.txt
12.  type in ls ./test2
    - verify that there is  a file called test_doc.txt inside test2

---
## simple exercise
---
1. create the following directory structure
   - home
     - test 1
     - test 2
       - test 2.1
       - test 2.2
     - test 3
2. what is in the /tmp directory? what can it be used for?
3. what is in the / directory? hint: it is called the root directory
4. create the following structure
   - home
     - test 1
       - test1.txt : type in the first 10 words of your favorite poem
       - test1.md : type in the first 10 words of a random wikipedia 
     - test 2
       - test2.txt : type in the first 10 words of your google search history
       - test2.txt : should be a copy of test1.txt
5. 
---
## Cheat sheet Construction
- create a cheat sheet with all of the necissary commands and description