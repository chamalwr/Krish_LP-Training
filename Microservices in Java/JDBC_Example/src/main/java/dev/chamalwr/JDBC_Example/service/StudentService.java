package dev.chamalwr.JDBC_Example.service;

import dev.chamalwr.JDBC_Example.model.Student;

public interface StudentService {

    void addStudent(Student student);

    Student getStudent(String id);

    void deleteStudent(String id);
}
