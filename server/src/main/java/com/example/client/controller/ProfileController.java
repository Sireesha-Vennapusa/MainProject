package com.example.client.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.loader.ResourceEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.client.model.Profile;
import com.example.client.repositary.ProfileRepo;
import org.springframework.http.HttpStatus;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/profile")
public class ProfileController {
    
    @Autowired
    private ProfileRepo profileRepo; 
   @PostMapping("/insert")
   public String insertprofile(@RequestBody Profile profile){
    profileRepo.save(profile);
    return "Profile Add";
   }
   @GetMapping("/insert")
   public List<Profile> getProfile(){
   return profileRepo.findAll();
}
@GetMapping("/insert/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable int id){
        Optional<Profile> profile= profileRepo.findById(id);
        if(profile.isPresent()){
            return new ResponseEntity<Profile>(profile.get(), HttpStatus.FOUND);
        }else{
            return new ResponseEntity<Profile>(HttpStatus.NOT_FOUND);
        }
    
    }
    // public ResponseEntity<Student> getStudentById(@PathVariable int id){
    //     Optional<Student> student= studentRepositary.findById(id);
    //     if(student.isPresent()){
    //         return new ResponseEntity<Student>(student.get(), HttpStatus.FOUND);
    //     }else{
    //         return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
    //     }
   @PutMapping("/insert/{id}")
   public String updateProfile(@PathVariable int id,@RequestBody Profile profile){
    Optional<Profile> profile1=profileRepo.findById(id);
    if (profile1.isPresent()){
        Profile p=profile1.get();
        p.setFirstName(profile.getFirstName());
        p.setLastName(profile.getLastName());
        p.setMobile(profile.getMobile());
        p.setAddress(profile.getAddress());
        profileRepo.save(p);
        return "Profile Upadated";
    }
    else{
        return "Profile not Upadated";
    }
    }
   
}
