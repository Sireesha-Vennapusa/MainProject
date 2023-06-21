package com.example.client.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.client.model.Student;
import com.example.client.repositary.StudentRepositary;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private  StudentRepositary studentRepositary;
    @PostMapping("/add")
    public String addStudent(@RequestBody Student student){
        studentRepositary.save(student);
        return "Student Added";
    }
    
    @GetMapping("/add")
    public ResponseEntity<List<Student>> getAllStudents(){
        List<Student> students = new ArrayList<>();
        studentRepositary.findAll().forEach(students::add);
        return new ResponseEntity<List<Student>>(students,HttpStatus.OK);
    }
    // @GetMapping("/add/{id}")
    // public ResponseEntity<Student> getStudentById(@PathVariable int id){
    //     Optional<Student> student= studentRepositary.findById(id);
    //     if(student.isPresent()){
    //         return new ResponseEntity<Student>(student.get(), HttpStatus.FOUND);
    //     }else{
    //         return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
    //     }
    // }
    // @PutMapping("/add/{id}")
    // public String updateStudent(@PathVariable int id,@RequestBody Student student){
    //     Optional<Student> student1 = studentRepositary.findById(id);
    //     if(student1.isPresent()){
    //         Student std=student1.get();
    //         std.setEmail(student.getEmail());
    //         std.setName(student.getName());
    //         std.setPassword(student.getPassword());
    //         studentRepositary.save(std);
    //         return "Student Details Updated";
    //     }else{
    //         return "Student Not Found";
    //     }
    // }
    // @DeleteMapping("/add/{id}")
    // public String deleteStudent(@PathVariable int id){
    //     studentRepositary.deleteById(id);
    //     return "Student Deleted";
    // }
    // @DeleteMapping("/add")
    // public String deleteAllStudent(){
    //     studentRepositary.deleteAll();
    //     return "All Student Deleted";
    // }

}