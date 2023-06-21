package com.example.client.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.client.model.Order;

public interface OrderRepo extends JpaRepository<Order,Integer>{
    
}
