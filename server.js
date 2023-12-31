//importing the asciiart functionality into terminal
const logo = require("asciiart-logo");
const config = require("./package.json");
//importing database from connection.js
const db = require("./config/connection");
//importing inquirer
const inquirer = require("inquirer");

//Beginning Prompts
function dashboard() {
  inquirer
    .prompt({
      type: "list",
      message: "Please choose the following options to navigate the dashboard:",
      name: "decision",
      choices: [
        "View ALL departments",
        "View ALL roles",
        "View ALL employees",
        "Add new employee",
        "Add department",
        "Add new role",
      ],
    })
    .then((choice) => {
      switch (choice.decision) {
        case "View ALL departments":
          departmentAll();
          break;
        case "View ALL roles":
          rolesAll();
          break;
        case "View ALL employees":
          employee();
          break;
        case "Add new employee":
          addEmployee();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add new role":
          addRoles();
          break;
      }
    });
}

//Queries

//Query to show all departments
function departmentAll() {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    } else {
      //console.table() shows the console.log() as a table format.
      console.table(results);
      dashboard();
    }
  });
}

//Query for viewing all roles
function rolesAll() {
  db.query("SELECT * FROM roles", function (err, results) {
    console.table(results);
    dashboard();
  });
}

//Query for viewing all employee
function employee() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    dashboard();
  });
}

//Query for adding an employee
//Need to add inquirer within function to ask questions. Then take data and replace values hard coded in the data (i.e. where const data is).
function addEmployee() {
  //Start Inquirer first to ask the questions. Then the Inquirer has its own .then, and getting access its own answers. In the .then method, execute the db.query as we created below.
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "last_name",
      },
      {
        type: "number",
        message: "What is the role ID of the employee?",
        name: "role_id",
      },
      {
        type: "number",
        message: "What is the manager ID of the employee if applicable?",
        name: "manager_id",
      },
    ])
    .then((data) => {
      db.query(
        //Make sure that in Values() parentheses, it is only 1 ?, not 3 more.
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${data.first_name}","${data.last_name}","${data.role_id}","${data.manager_id}")`,
        data,
        function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
            dashboard();
          }
        }
      );
    });
}

function addDepartment() {
  //Start Inquirer first to ask the questions. Then the Inquirer has its own .then, and getting access its own answers. In the .then method, execute the db.query as we created below.
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department you want to add?",
        name: "department_name",
      },
    ])
    .then((data) => {
      db.query(
        `INSERT INTO department (department_name)VALUES ("${data.department_name}")`,
        data,
        function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
            dashboard();
          }
        }
      );
    });
}

function addRoles() {
  //Start Inquirer first to ask the questions. Then the Inquirer has its own .then, and getting access its own answers. In the .then method, execute the db.query as we created below.
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of the role you want to add?",
        name: "title",
      },
      {
        type: "number",
        message: "How much does the salary pay for this role?",
        name: "salary",
      },
      {
        type: "number",
        message: "What department is this role related to?",
        name: "department_id",
      },
    ])
    .then((data) => {
      db.query(
        `INSERT INTO roles (title, salary, department_id)VALUES ("${data.title}","${data.salary}","${data.department_id}")`,
        data,
        function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
            dashboard();
          }
        }
      );
    });
}

//ASCII ART Logo
console.log(
  logo({
    name: "Lords of Offices",
    font: "Star Wars",
    linechars: 10,
    padding: 10,
    margin: 2,
    borderColor: "yellow",
    logoColor: "bold-yellow",
    textColor: "yellow",
  }).render()
);

dashboard();

// addEmployee();
// addDepartment();
// addRoles();
