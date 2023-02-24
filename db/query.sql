-- Find all students in all classes
SELECT student_class.id, student_class.first_name, student_class.last_name, role.title, course.name AS course, role.weekly_hours, CONCAT(TA.first_name, ' ', TA.last_name) AS TA FROM student_class
LEFT JOIN role ON student_class.role_id = role.id
LEFT JOIN course on role.course_id = course.id
LEFT JOIN student_class TA ON TA.id = student_class.ta_id;

