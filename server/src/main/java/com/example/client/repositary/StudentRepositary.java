package com.example.client.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.client.model.Student;
@Repository
public interface StudentRepositary extends JpaRepository<Student , Integer> {
    
}
