package com.example.client.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.client.model.Profile;

@Repository
public interface ProfileRepo extends JpaRepository<Profile ,Integer>{
    
}
