select * from Standards
select * from Students
select * from Teachers
select * from Courses
select * from StudentCourses

insert into Standards([Name], [MaxNumberOfStudents], [TeacherId])
values ('A class', 30, null)

insert into Students([Name], [Age], [StudentQuestion], [StandardId])
values ('Angel', 27, null, 1)

insert into Teachers([Name])
values ('Ivan Ivanov')

insert into Teachers([Name])
values ('Dragan Draganov')

insert into Courses
values('Chemistry', 'Learn to create potions', 1)

insert into Courses
values('Math', 'Learn to calculate', 2)

insert into StudentCourses
values (1, 1)