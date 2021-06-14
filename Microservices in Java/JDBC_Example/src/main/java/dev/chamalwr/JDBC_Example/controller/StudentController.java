package dev.chamalwr.JDBC_Example.controller;

import dev.chamalwr.JDBC_Example.model.Student;
import dev.chamalwr.JDBC_Example.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable String id){
        var student = studentService.getStudent(id);
        if (student == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(student);
    }


    @PostMapping
    public void addStudent(@RequestBody Student student){
        this.studentService.addStudent(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable String id){
        this.studentService.deleteStudent(id);
    }

}
