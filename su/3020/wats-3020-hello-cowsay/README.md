# WATS 3020: Cowsay Hello World

### **Walkthrough Video**
[Cowsay Hello World](https://www.youtube.com/watch?v=08WZvS6hB2o&t=1s)
***

JavaScript was created to be run in the browser, but in 2009, the JavaScript engine in Chrome was extracted and used to create a command line program that can execute JavaScript and is known as `node.js`.  A software registry named **npm** was created to hold and manage dependencies.  When you install `node`, you also get `npm` which is a program used to manage downloading code from [npmjs.org](npmjs.org).  

In this assignment you'll get experience hooking up **node** modules to a JavaScript file and hooking up a JavaScript file to an HTML file.

We like to do a **Hello World** project when we're learning a new language.  Being able to say "hello world" means that you are able to give your program some I/O capabilities, that is your program can "talk".  In this exercise you'll see JavaScript "talk" in two very different ways: 1) through a command line interface with **node** and 2) through a web/gui interface via an HTML file.

## Learn JavaScript in the Browser or With Node?
JavaScript is the only language that runs in the browser.  The benefit of learning to run JavaScript using **node** it that you can run code in a way that more approximates how you would run code with other scripting languages like Python.  With **node**, we don't need to setup the constructs of HTML or run a server to execute JavaScript.  

## Installing node and npm
See these instructions for installing node before you begin: [Node install](./install_node.md).  
 When you install **node**, you get it's package manager **npm** (Node Package Manager) along with it.  Node packages are chunks of JavaScript made available through **modules** that get downloaded from [npmjs.org](https://npmjs.org).  When you study JavaScript Frameworks, you'll work more intensively with **npm** modules.  In this assignment we introduce these resources as we'll be using **node** to learn to program JavaScript in several tutorial assignments. 

Once **node** and **npm** are installed, you can run `npm install` from the command line in the root of this project to import the necessary libraries to access the  **cowsay** library from the code that **node** will execute.

## Project Resources

It might be helpful to review some additional resources as you work through
this project:

* [HTML and JavaScript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
* [Node modules and CommonJS](https://nodejs.org/docs/latest/api/modules.html)

## Basic Requirements

In order to successfully complete this exercise, you must find and complete the **TODOs** in the code:

* Fork this repository and clone to your local projects directory
* Run `npm install` in the root of this project
* Use script tag in html to make js/main.js available to index.html.  
```HTML
<script src="js/main.js"></script>
```
* Use CommonJS require to make cowsay and getargs modules available to index.js.
```JavaScript
const cowsay = require("cowsay");
const getargs = require("./modules/get-args")
```
* Run index.html in the browser and get the cow to say "hello world".
* Run index.js in the command line and get the cow to say "hello world".
* Take screenshots of the browser and CLI output and put them in the screenshots directory.
* Push your source code to your `master` branch.
* Deploy your site to master branch.
* Turn in 2 URLs: 1 to your code and 1 to the deployed code

## Turn in assignment
Push your code to the forked repository in your account.    
* Your code screenshots directory should contain 2 images - one of the browser cow saying "hello world" and one of the command line cow saying "hello world"
Turn in 2 URL's on Canvas which should be of the format:
* https://github.com/{account name}/{repo name}
* https://{account name}.github.com/{repo name}



## Stretch Goals

If you want to push this project further, you can try some of the following:

* Enhance the styling of the html page.
* Change the way the cows looks in the html page
* Change the eyes and tail of the cow in the **node** output