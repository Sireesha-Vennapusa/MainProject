import React,{useState} from "react";
import "./cards.css";
import axios from "axios";
export  const Cakes=()=>{
    const menuItems = [
        { id: 105, img:"items/cakes/blackforest pastry.jpg" ,name: 'BlackForest Pastry',quan:'3 pieces', price: 120 },
        { id: 106, img:"items/cakes/butterscotch.webp" ,name: 'ButterScotch Cake',quan:'1/2 kg', price:450  },
        { id: 107, img:"items/cakes/choco cupcake.jpg" ,name: 'Choco Cup Cake',quan:'3 pieces', price: 130 },
        { id: 108, img:"items/cakes/choco-almond-cake.jpg" ,name: 'Choco Almond Cake',quan:'kg', price:999  },
        { id: 109, img:"items/cakes/chocolate.jpg" ,name: 'Chocolate Cake',quan:'500 gms', price:400  },
        { id: 110, img:"items/cakes/puffpastry.jpg" ,name: 'Spl Puff Pastry',quan:'6 pieces', price: 799 },
        { id: 111, img:"items/cakes/donuts.webp" ,name: 'Donuts',quan:'3 pieces', price: 200 },
        { id: 112, img:"items/cakes/french pastries.jpeg" ,name: 'French pastries',quan:'4 pieces', price:250  },
        { id: 113, img:"items/cakes/icecresm cake.jpg" ,name: 'Ice-Cream Cake',quan:'kg', price: 999 },
        { id: 114, img:"items/cakes/oreo cake.jpg" ,name: 'Oreo Cake',quan:'1/2 kg', price:499  },
        { id: 115, img:"items/cakes/pineapple.jfif" ,name: 'Pineapple Cake',quan:'1/2 kg', price:350  },
        { id: 116, img:"items/cakes/pistacake.jpg" ,name: 'Pista Cake',quan:'1/2 kg', price:499  },
        { id: 117, img:"items/cakes/red velvet cool cake.webp" ,name: 'Red Velvet Cake',quan:'kg', price:1200  },
        { id: 118, img:"items/cakes/strawberry-Pastry.jpg" ,name: 'Strawberry Pastry',quan:'3 pieces', price: 150 },
        { id: 119, img:"items/cakes/vanila cupcake.jpg" ,name: 'Vanila Cupcake',quan:'3 pieces', price:100  },  
        { id: 120, img:"items/cakes/strawberry.webp" ,name: 'Strawberry Cake',quan:'kg', price:400  },
        { id: 121, img:"items/cakes/vanila.jpg" ,name: 'Vanila cake',quan:'1/2 kg', price: 320 },
        { id: 122, img:"items/sweets/badusha.jpg" ,name: 'Badusha',quan:'kg', price:170  },
        { id: 123, img:"items/sweets/Doodhpeda.jpg" ,name: 'Doodhpeda',quan:'200gm', price:75  },
        { id: 124, img:"items/sweets/Gulab-Jamun.jpg" ,name: 'Gulab-Jamun',quan:'1kg', price:320  },
        { id: 125, img:"items/sweets/jalebi.jpg" ,name: 'Jalebi',quan:'kg', price:250  },
        { id: 126, img:"items/sweets/jhangri.jpg" ,name: 'Jhangri',quan:'kg', price:200  },
        { id: 127, img:"items/sweets/kaju_barji.jpg" ,name: 'Kaju Barfi',quan:'kg', price: 500 },
        { id: 128, img:"items/sweets/khava-puri.jpg" ,name: 'Khova Puri',quan:'kg', price:260  },
        { id: 129, img:"items/sweets/Motichoor-ladoo.jpg" ,name: 'MotiChoor Laddu',quan:'kg', price: 1500 },
        { id: 130, img:"items/sweets/mysorepak.jpg" ,name: 'Mysore pak',quan:'200gm', price:350  },
        { id: 131, img:"items/sweets/rasgulla.png" ,name: 'Rasgulla',quan:'kg', price:1000  },
        { id: 132, img:"items/sweets/rasmalai-1.jpg" ,name: 'Rassmalai',quan:'500gm', price:500  },
        { id: 133, img:"items/sweets/sutarfeni.jpg" ,name: 'Sutarfeni',quan:'200gm', price:650  }
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
  