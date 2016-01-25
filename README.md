# Unit Testing Angular (Basic)

This code demonstrates how to unit test the most common parts of an Angular
application:

* controllers
* services
* $http

These examples can be used to help you determine how to test
various sections of your code. It is assumed that you are able to identify
the major types of angular code as mentioned in the list above.

## Example
Files involved:

* public/javascript/controller.js - contains SimpleController
* test/controllerSpec.js - contains tests for SimpleController

# Dependencies
When implementing unit testing on your own project, you will require
karma and jasmine libraries. The following commands should get you going.

`npm install karma`

 `npm install karma-cli`
 
 `npm install karma-jasmine`
 
 `npm install jasmine-core`
 
 `npm install karma-chrome-launcher` - add more plugins if you want to test other browsers
 
 `karma init` - starts a wizard that let's you generate the karma configuration file karma.conf.js
 
## Angular
 
 `npm install angular`
 `npm install angular-mocks`