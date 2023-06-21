package com.example.client.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.client.model.Order;
import com.example.client.repositary.OrderRepo;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderRepo orderRepo;
@PostMapping("/add")
public String addorder(@RequestBody Order order)  {
    orderRepo.save(order);
    return "ordered";
}  
@GetMapping("/add")
public List<Order> getAllOrders(){
    return orderRepo.findAll();
}

  @DeleteMapping("/add/{id}")
    public String DeleteDataByName(@PathVariable Integer id) {
        orderRepo.deleteById(id);
        return "Deleted Sucessfully";
    }

}
