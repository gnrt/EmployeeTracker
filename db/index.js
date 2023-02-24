/************************************************
  REMOVE ALL COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
*************************************************/

// As suggested in README.md guideline for this homework, you can choose to use constructor functions or class to develop the functions
//  for SQL statements. Since class gives you cleaner syntax, this pseudo code is assumed that you use class for the implementation of
//  SQL statements. Remember both constructor functions and classes are used to create objects.

// HINT: To use promise wrapper, for example:
//  const databaseConnection = mysql.createConnection({...});
//  databaseConnection.promise().query(...);
//
//  - the whole query statement needs to be returned in the same line for the caller to receive the data with promise .then or async/await
//        for example: return databaseConnection.promise().query(...);
//  - all queries that take in parameters need to be prepared statements

// STEPS
// 1. import database connection from the current db folder
// 2. Declare a database class for methods to encapsulate all SQL statements
//    a. constructor takes in database connection as input parameter
//    b. set the instance variable to the connection object passed in
// 3. Exports the database object instantiated from the database class, passing connection object to the class constructor

// =============
// MAIN PROCESS
// =============

const connection = require('./connection.js');

// class - for database or database access object
class MyDatabase {
  //  1. constructor - takes in database connection as input parameter and assign it to the instant variable
  constructor(connection) {
    this.connection = connection;
  }
  //  2. method - find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findAllEmployeeClasses() {
    return this.connection.promise().query(
      "SELECT employee_class.id, employee_class.first_name, employee_class.last_name, role.title, department.name AS department, role.weekly_hours " +
      "FROM employee_class " +
      "LEFT JOIN role ON employee_class.role_id = role.id " +
      "LEFT JOIN department on role.department_id = department.id "
    );
  };

  //  3. method - create a new employee - takes employee object as input parameter
  createEmployeeClass(employeeClass) {
    return this.connection.promise().query(
      "INSERT INTO employee_class (first_name, last_name, role_id, ta_id) VALUES (?, ?, ?, ?)",
      [employeeClass.first_name, employeeClass.last_name, employeeClass.role_id]
    );
  };
  //  4. method - update employee's role - takes employee id and role id as input parameters
  updateEmployeeClassRole(employeeClassId, roleId) {
    return this.connection.promise().query(
      "UPDATE employee_class SET role_id = ? WHERE id = ?",
      [roleId, employeeClassId]
    );
  };

  //  5. method - find all roles - join with departments to diplay department names
  findAllRoles() {
    return this.connection.promise().query(
      "SELECT role.id, role.title, department.name AS department, role.weekly_hours " +
      "FROM role " +
      "LEFT JOIN department ON role.department_id = department.id;"
    );
  };
  //  6. method - create a new role - takes in role object as input parameter
  createRole(role) {
    return this.connection.promise().query(
      "INSERT INTO role (title, weekly_hours, department_id) VALUES (?, ?, ?)",
      [role.title, role.weekly_hours, role.department_id]
    );
  };
  //  7. method - find all departments
  findAlldepartments() {
    return this.connection.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  };

  //  8. method - create a new department - takes in department object as input parameter
  createDepartment(department) {
    return this.connection.promise().query(
      "INSERT INTO department (name) VALUES (?)", department.name);
  };

};

module.exports = new MyDatabase(connection);
