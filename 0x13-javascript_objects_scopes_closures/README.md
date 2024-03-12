# 0x13. JavaScript - Objects, Scopes and Closures.

## Background Context
JavaScript is used for many things. Here, you will use JavaScript for 2 reasons:
* Scripting (same as we did with Python)
* Web front-end

For the moment, and for learning all basic concepts of this language, we will do some scripting. After, we will make our AirBnB project dynamic by using Javascript and JQuery.

### Resources
**Read or watch**:
* [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Object-oriented JavaScript ](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) **(read all examples!)**
* [Class - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [super - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
* [extends - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
* [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [this/self](https://alistapart.com/article/getoutbindingsituations/)
* [Modern JS](https://github.com/mbeaudru/modern-js-cheatsheet)

### Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

#### General
* Why JavaScript programming is amazing
* How to create an object in JavaScript
* What `this` means
* What `undefined` means
* Why the variable type and scope is important
* What is a closure
* What is a prototype
* How to inherit an object from another


#### Copyright - Plagiarism
* You are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.
* You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.
* You are not allowed to publish any content of this project.
* Any form of plagiarism is strictly forbidden and will result in removal from the program.

### Requirements
#### General
* Allowed editors: `vi`, `vim`, `emacs`
* All your files will be interpreted on Ubuntu 20.04 LTS using `node` (version 14.x)
* All your files should end with a new line
* The first line of all your files should be exactly `#!/usr/bin/node`
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should be `semistandard` compliant (version 16.x.x). [Rules of Standard](https://intranet.alxswe.com/rltoken/1T1yg1vOAChRN20Yyz8crw) + [semicolons on top](https://intranet.alxswe.com/rltoken/35q5Pc6A6KWPyd3kGeRQFg). Also as reference: AirBnB style
* All your files must be executable
* The length of your files will be tested using `wc`

### More Info
#### Install Node 14

```bash
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

#### Install semi-standard
[Documentation](https://intranet.alxswe.com/rltoken/35q5Pc6A6KWPyd3kGeRQFg)

```linux
$ sudo npm install semistandard --global
```