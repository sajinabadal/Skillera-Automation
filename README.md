SkillEra Playwright End-toEnd testing

Project Title
Skillera Automation Testing Framework 

Overview
This project is an end-to-end UI automation testing framework built using Playwright with JavaScript.

What the framework tests:
* Manager login functionality
* Student creation workflow
* Student management features (add, verify, and validate student data)
* End-to-end user role-based flow (Manager → Student operations)

Tech Stack:
* Playwright
* JavaScript (Node.js)
* npm
* GitHub
* Chromium

Main Features:
* End-to-end automation of role-based workflows
* Manager authentication and dashboard validation
* Student creation and management testing
* Cross-browser testing support (Chromium, Firefox, WebKit)
* Structured test organization using Playwright test runner

Folder Structure
Playwright Project/
│
├── tests/                  
│   ├── UserCreation.spec.js
│   ├── ABC.spec.js
│   ├── AddStudent.spec.js
│   ├── New.spec.js
│   └── example.spec.js
│
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies
├── package-lock.json       # Locked dependency versions
├── node_modules/           # Installed packages
├── playwright-report/      # Test execution reports
└── test-results/           # Test artifacts and results

Installations Steps
* Install Node.js
* Install Git
* Install Playwright 

How to Run Tests
Run all tests
npx playwright test

Run a specific test file
npx playwright test tests/UserCreation.spec.js

Run tests in headed mode
npx playwright test --headed

View HTML report
npx playwright show-report
