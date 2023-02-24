-- USE your_database;
use employees_db;

-- INSERT INTO your_table_for_departments
INSERT INTO department
    (name)
VALUES
    ('Web Development Full-Stack'),
    ('UX/UI Design'),
    ('Java Programming Language'),
    ('Internet Security');

-- INSERT INTO your_table_for_roles
INSERT INTO role
    (title, weekly_hours, department_id)
VALUES
    ('Web Dev TA ', 35, 1),
    ('Web Dev Student ', 40, 1),
    ('UX/UI TA', 36, 2),
    ('UX/UI Student', 20, 2),
    ('Java TA', 41, 3),
    ('Java Student', 45, 3),
    ('Internet Security TA', 38, 4),
    ('Internet Security Student', 50, 4);

-- INSERT INTO your_table_for_employees
INSERT INTO employee_class
    (first_name, last_name, role_id)
VALUES
    ('Peter', 'Kim', 1),
    ('John', 'Doe', 2),
    ('Mary', 'Doe', 3),
    ('Jill', 'Clementi', 4),
    ('Dave', 'Smith', 5),
    ('Kevin', 'Johnson', 6),
    ('Claire', 'Harriman', 7),
    ('Raymond', 'Scottson', 8);
