# Assurity Technical Assignment

Assurity technical assignment project with Cypress installation instructions.

## Getting Started

Follow the setup procedure to get the Cypress end-to-end testing framework up and running. Estimated time 5min.

### Prerequisites

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

- Mac OS 10.9+ (Mavericks+), only 64bit binaries are provided for macOS.
- Linux Ubuntu 12.04+, Fedora 21, Debian 8
- Windows 7+, only 32bit binaries are provided for Windows.

### Installing

For the sake of this project the simple way is to download [Cypress](http://download.cypress.io/desktop) directly.

- Download [Cypress](http://download.cypress.io/desktop) desktop app for running tests
- Clone [Assurity Technical Assignment](https://github.com/davidcmonty/assurity-technical-assignment.git) from GitHub

## Running the test

- Open Cypress app
- Drag cloned project folder to app window
- Click 'Run All Tests'
- Click on test steps to see details (open the browser console as well)
- See code solution /cypress/integration/api_spec.js

## Assignment solution approach

I chose to use the Cypress framework using JavaScript as a the language as this is something we are wanting to use at Heyday. API testing is not something we do yet, but is high on the agenda to incorporate at Heyday. I have never used Cypress until this assignment and apart from a quick LinkedIn course on API testing using PHP and Behat, have not done API testing. One of the frameworks we use is Robot Framework which uses a keyword based tool and does not use a language for writing tests. So dealing with Cypress syntax and JavaScript was challenging in parts, yet extremely satisfying when the solution was solved.

My mindset is that every problem has a solution and that if you want to learn something you can, with persistence and the right attitude, any goal can be achieved.

## Meeting assignment requirements
- JavaScript was used as the programming language of choice
- Tests are executed using the Cypress desktop app to allows execution of tests
- Tests validate all 3 acceptance criteria
- Tests are written to follow Cypress best practice. Note that the base URL could have been moved to the cypress.json but for simplicity sake this was added to the api_spec.js as a variable.

## Author

* **David Montgomery** - [Assurity Technical Assignment](https://github.com/davidcmonty/assurity-technical-assignment.git)

## Acknowledgments

* [Cypress docs](https://docs.cypress.io/guides/overview/why-cypress.html)
* The internet
