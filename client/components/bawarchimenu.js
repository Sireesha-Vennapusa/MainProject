import { useState } from 'react';
import React from "react";
import axios from 'axios';
import './cards.css';
export function BawarchiMenu(){
  const menuItems = [
    { id: 86, img:"veg/veg-biryani.jpg" ,name: 'Veg-Biryani',quan:'Family Pack', price: 250 },
    { id: 87,img:"veg/Gobi-Fried-Rice.jpg", name: 'Gobi-Fried-Rice',quan:'200g',price:75  },
    { id: 88,img:"veg/paneer-paratha.jpg", name: 'paneer-paratha',quan:'2', price: 120 },
    { id: 89, img:"veg/cury_paneer.jpg" ,name: ' Paneer Kofta',quan:'180g', price: 150 },   
    { id: 90, img:"veg/paneer-butter-masala.jpg " ,name: 'paneer-butter-masala ',quan:'300g', price:200 },
    { id: 92, img:"veg/noodles.jpg" ,name: 'Noodles ',quan:'1', price: 100 },
    { id: 93, img:"veg/kaju-cury.jpg" ,name: 'Kaju Curry',quan:'200gm', price:200 },
    { id: 94, img:"veg/Tandoori-Roti.jpg" ,name: 'Tandoori Roti',quan:'1', price:50 },
    { id: 95, img:"veg/shahi-paneer.jpg" ,name: 'Shahi-Paneer',quan:'220gm', price: 350 },
    { id: 96, img:"veg/plain-dosa.jpg" ,name: 'Plain Dosa',quan:'1', price: 25 },
    { id: 97, img:"veg/paneer-Dosa.jpg" ,name: 'Paneer-Dosa ',quan:'1', price: 60  },
    { id: 98, img:"veg/kaju-masala-2.jpg" ,name: 'Paneer Curry ',quan:'200gm', price: 150  },
    { id: 99, img:"veg/idly.jpg" ,name: 'Idly ',quan:'2', price: 25  },
    { id: 100, img:"veg/french-fries.jpg" ,name: 'French fries',quan:'1 pack', price:100  },
    { id: 10, img:"veg/bread-roti.jpg" ,name: 'Bread-roti',quan:'2', price:50   },
    { id: 102, img:"veg/pasta.jpg" ,name: 'Pasta',quan:'1', price: 60 },
    { id: 103, img:"veg/ven-pongal.jpg" ,name: 'Pongal',quan:'1', price:40  }
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
    return(
    <div className="container">
        

      <div className="row gy-3 my-3">
      {menuItems.map(item=>(
       <div className="col-sm-6 col-md-4 col-lg-3">
         <div className="card" key={item.id}>
          <img src={item.img} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title" style={{color:"black"}}>{item.name}</h5>
              <p className="card-text">
                Quantity:{item.quan}<br></br>
                Price:&#8377;{item.price}
              </p>
              
              
          <button className="btn2" onClick={() => handleItemClick(item)}>Order Now
           </button>
        </div>
        </div>
        </div>
))}
</div>
 
        </div>
             

    );

}