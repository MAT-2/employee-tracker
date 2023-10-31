// const express = require("express");
const db = require("./config/connection");
// const mysql = require("mysql2");

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

//DB connection
// const db = mysql.createConnection(
//   {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   },
//   console.log(`Connected to employee database`)
// );

//Queries

//Query to show all departments
function departmentAll() {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
}

//Query for viewing all roles
function rolesAll() {
  db.query("SELECT * FROM roles", function (err, results) {
    console.log(results);
  });
}

//Query for viewing all employee
function employee() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.log(results);
  });
}

//Query for adding an employee
//Need to add inquirer within function to ask questions. Then take data and replace values hard coded in the data (i.e. where const data is).
function addEmployee() {
  //Start Inquirer first to ask the questions. Then the Inquirer has its own .then, and getting access its own answers. In the .then method, execute the db.query as we created below.
  const data = ["Tom", "Brady", 2, 1];
  db.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id)VALUES (?,?,?,?)",
    data,
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    }
  );
}

addEmployee();
