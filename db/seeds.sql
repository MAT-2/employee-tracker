INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");
       ("Human Resources");
       ("Marketing");
       ("Customer Service");
       ("Maintenance"),

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Lead Engineer", 80000, 2),
       ("Software Engineer", 150000, 3),
       ("Account Manager", 120000, 4),
       ("Accountant", 160000, 5),
       ("Lawyer", 125000, 6),
       ("Legal Team Lead", 250000, 7),
       ("Lawyer", 190000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frodo", "Baggins", 1, 1),
       ("Sam", "Gamgee", 2, 2),
       ("Gandalf", "Grey", 3, 3),
       ("Legolas", "Greenleaf", 4, 4),
       ("Gimli", "Glóin", 5, 5),
       ("Aragorn", "Elessar", 6, 6),
       ("Peregrin", "Took", 7, 7),
       ("Meriadoc", "Brandybuck", 8, 8);