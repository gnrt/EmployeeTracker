const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db/index.js");
require("console.table");

initApp();

// Display logo text, load main prompts
function initApp() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);

  promptExampleQuestions();
}

function promptExampleQuestions() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEE_CLASS"
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS"
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE_CLASS"
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    // Call the appropriate function depending on what the user chose
    switch (choice) {
      case "VIEW_EMPLOYEE_CLASS":
        viewAllEmployeeClass();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
        case "ADD_EMPLOYEE":
        addEmployee();
        break;
      default:
        quit();
    }
  }
  )
};

// View all employees
function viewAllEmployeeClass() {
  db.findAllEmployeeClasses()
    .then((dbResults) => {
      console.log("db results: ", dbResults);
      const [rows] = dbResults;
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => promptExampleQuestions());
};

// View all deparments
function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let courses = rows;
      console.log("\n");
      console.table(courses);
    })
    .then(() => promptExampleQuestions());
};

// Add a department
function addDepartment() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?"
    }
  ])
    .then(res => {
      let name = res;
      db.createDepartment(name)
        .then(() => console.log(`Added ${name.name} to the database`))
        .then(() => promptExampleQuestions())
    })
};
// Add an employee
function addEmployee() {
  prompt([
    {
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      message: "What is the employee's last name?"
    },
    {
      name: "role_id",
      message: "What is the employee's role id?"
    },
  ])
    .then(res => {
      let employee = res;
      db.createEmployee(employee)
        .then(() => console.log(`Added ${employee.first_name} to the database`))
        .then(() => promptExampleQuestions())
    })
};

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
