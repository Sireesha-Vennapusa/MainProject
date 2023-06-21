package com.example.client.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int price;
    private String date;
    private String img;

    

    public Order(int id, String name, int price, String date, String img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.date = date;
        this.img = img;
    }



    public int getId() {
        return id;
    }



    public void setId(int id) {
        this.id = id;
    }



    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }



    public int getPrice() {
        return price;
    }



    public void setPrice(int price) {
        this.price = price;
    }



    public String getDate() {
        return date;
    }



    public void setDate(String date) {
        this.date = date;
    }



    public String getImg() {
        return img;
    }



    public void setImg(String img) {
        this.img = img;
    }



    public Order() {
    }



    @Override
    public String toString() {
        return "Order [id=" + id + ", name=" + name + ", price=" + price + ", date=" + date + ", img=" + img + "]";
    }

    
}