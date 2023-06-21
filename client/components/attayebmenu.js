import { React, useState } from "react";
import "./cards.css";
import axios from "axios";
export function Menu() {
  const menuItems = [
    {
      id: 1,
      img: "items/arabian/ArabicRoastChicken.jpg",
      name: "Arabic Roast Chicken",
      quan: "1 Chicken",
      price: 450,
    },
    {
      id: 2,
      img: "items/arabian/bukhari.JPG",
      name: "Bukhari Kabsa",
      quan: "Serves 3-4",
      price: 429,
    },
    {
      id: 3,
      img: "./items/arabian/Mutabbaq_1.jpg",
      name: "Mutabbaq",
      quan: "1",
      price: 139,
    },
    {
      id: 4,
      img: "./items/arabian/shawarma.jpg",
      name: "Shawarma",
      quan: "1",
      price: 109,
    },
    {
      id: 5,
      img: "./items/arabian/khubuz.jpg",
      name: "Khubz",
      quan: "5",
      price: 45,
    },
    {
      id: 6,
      img: "./items/arabian/broast.jpg",
      name: "Chicken Broast",
      quan: "Family Pack",
      price: 999,
    },
    {
      id: 7,
      img: "./items/arabian/nuggets.jpg",
      name: "Chicken Nuggets",
      quan: "300gm",
      price: 249,
    },
    {
      id: 8,
      img: "./items/arabian/kabsa.jpg",
      name: "Chicken Kabsa",
      quan: "Serves 3-4",
      price: 459,
    },
    {
      id: 9,
      img: "./items/arabian/baklava.jpg",
      name: "Baklava",
      quan: "100gm",
      price: 259,
    },
    {
      id: 10,
      img: "./items/arabian/shish kebab.jpg",
      name: "Sheesh Kebab",
      quan: "150gm",
      price: 89,
    },
    {
      id: 11,
      img: "./items/arabian/kunafa.jpg",
      name: "Kunafa",
      quan: "1",
      price: 280,
    },
    {
      id: 12,
      img: "./items/arabian/hummus.jpg",
      name: "Hummus",
      quan: "220gm",
      price: 140,
    },
    {
      id: 13,
      img: "./items/arabian/BalahalSham.jpg",
      name: "Balah-al-Sham",
      quan: "220gm",
      price: 450,
    },
    {
      id: 14,
      img: "./items/arabian/cheesearabic.jpg",
      name: "Arabic Sweet Cheese rolls",
      quan: "250gm",
      price: 350,
    },
    {
      id: 15,
      img: "items/chicken/al-harees.jpg",
      name: "Chicken Harees (Haleem)",
      quan: "1",
      price: 295,
    },
    {
      id: 16,
      img: "./items/arabian/Falafel.jpg",
      name: "Falafel",
      quan: "6 pieces",
      price: 35,
    },
    {
      id: 17,
      img: "./items/arabian/mandi.jpg",
      name: "Mandi(Lamb)",
      quan: "Serves 4",
      price: 670,
    },
    {
      id: 18,
      img: "./items/arabian/awama.jpg",
      name: "Awama",
      quan: "180gms",
      price: 279,
    },
    {
      id: 19,
      img: "./items/arabian/faham.jpg",
      name: "Faham",
      quan: "1",
      price: 109,
    },
    {
      id: 20,
      img: "./items/arabian/temahalva.jpg",
      name: "Tema(Pistachio Halva) ",
      quan: "240gm",
      price: 410,
    },
    {
      id: 21,
      img: "./items/arabian/Mamool.jpg",
      name: "Mamool (Dates Biscuits)",
      quan: "150gm",
      price: 399,
    },
  ];

  

  const handleItemClick = (item) => {
    // Create the request payload
    const orderData = {
      name: item.name,
      price: item.price,
      date: "16-06-2023",
      img: item.img
    }
    // Make a POST request to the backend API endpoint
    axios
    .post("http://localhost:8080/order/add", orderData)
    .then((response) => {
      // Handle the success response
      alert("Ordered successfully");
      
        })
        .catch((error) => {
          // Handle the error
          console.error("Error:", error);
        });
    }

  return (
    <div className="container">
      <div className="row gy-3 my-3">
        {menuItems.map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card" key={item.id}>
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black" }}>
                  {item.name}
                </h5>
                <p className="card-text">
                  Quantity:{item.quan}
                  <br></br>
                  Price:&#8377;{item.price}
                </p>

                <button className="btn2 transition hover:scale-125" onClick={() => handleItemClick(item)}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
