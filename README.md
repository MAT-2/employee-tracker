# Description

A backend project creating an employee tracker system within the terminal. It was fun being creative with using ASCII Art for the logo, and being able to create databases based on Inquirer prompt options and using switch cases to make choosing between options intuitive. The only difficulty was using SQL syntax to format the tables to connect between each other.

## Table of Contents
- [Installation](installation)
- [User Story](#user-story)
- [Acceptance Critera](acceptance-criteria)
- [Technologies Used](technologies-used)
- [Resources](resources)
- [License](license)

## Installation

- Inquirer v.8.2.4: https://www.npmjs.com/package/inquirer/v/8.2.4#table-of-contents
- MySQL2 v.3.6.2: https://www.npmjs.com/package/mysql2
- Express.JS v.4.17.1: https://expressjs.com/
- dotenv v.16.3.1: https://www.npmjs.com/package/dotenv
- Squelize v.6.3.5: https://sequelize.org/
- npm: https://nodejs.org/en
- ASCIART-LOGO v.0.2.7: https://www.npmjs.com/package/asciiart-logo

## User Story
````
AS a back-end software developer
I WANT to create an employee tracker system within a terminal
SO THAT I can track employees and make updates as needed
````


## Acceptance Criteria

````
GIVEN a back-end employee tracker application
WHEN I open the terminal
THEN I am presented the employee tracker logo and a list of options to choose
WHEN I select the VIEW ALL DEPARTMENTS
THEN I can see all the existing departments details such as ID and DEPARTMENT NAME
WHEN I select the VIEW ALL ROLES
THEN I can see all existing roles that includes ID, TITLE, SALARY, and DEPARTMENT ID
WHEN I select VIEW ALL EMPLOYEES
THEN I can see the ID, FIRST NAME, LAST NAME, ROLE ID, and MANAGER ID associated if applicable
WHEN I select the option to ADD NEW EMPLOYEE
THEN I am given a prompt to fill in the details provided such as ID, FIRST NAME, LAST NAME, ROLE ID, and MANAGER ID associated if applicable
WHEN I select the option to ADD NEW DEPARTMENT
THEN I am given a prompt to fill in the details provided such as ID and DEPARTMENT NAME
WHEN I select the option to ADD NEW ROLE
THEN I am given a prompt to fill in the details provided such as ID, TITLE, SALARY, and DEPARTMENT ID
````

## Technologies Used
1. Node.JS
2. Express.JS
3. DOTENV
4. Sequelize
5. MySQL
6. NPM
7. ASCIART-LOGO

## Resources

- https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
- https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript
- https://developer.mozilla.org/en-US/docs/Web/API/console/table
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

## License

<img src='https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge'>

Copyright 2023 Stress Free Me

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Video to Link
https://drive.google.com/file/d/1mHX7H3CXkjBFMS4lvfKSJ0biXeIWpd9H/view
