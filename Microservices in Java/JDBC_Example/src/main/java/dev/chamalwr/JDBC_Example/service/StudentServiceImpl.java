package dev.chamalwr.JDBC_Example.service;

import dev.chamalwr.JDBC_Example.model.Student;
import dev.chamalwr.JDBC_Example.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService{

    private StudentRepository studentRepository;

    @Autowired
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void addStudent(Student student) {
        studentRepository.save(student);
    }

    @Override
    public Student getStudent(String id) {
       var student = studentRepository.findById(id);
       if(student.isPresent()){
           return student.get();
       }
       return null;
    }

    @Override
    public void deleteStudent(String id) {
      studentRepository.delete(getStudent(id));
    }
}
