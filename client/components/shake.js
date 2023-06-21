import {React,useState} from "react";
import axios from "axios";
import './cards.css';
export function Ice(){
  const menuItems = [
    { id: 51,img:"items/ice/butters.jpg", name: 'Butterscotch Ice-Cream', quan:'1L', price:510  },
    { id: 52,img:"items/ice/choco.jpg", name: 'Chocolate Ice-Cream', quan:'1L', price:470  },
    { id: 53,img:"items/ice/coconut.jpg", name: 'Coconut Ice-Cream', quan:'3 Scoops', price: 190 },
    { id: 54,img:"items/ice/blueberry.jpg", name: 'Blueberry Ice-Cream', quan:'700ml', price: 370 },
    { id: 55,img:"items/ice/matkakulfi.jpg", name: 'Matka Kulfi', quan:'200ml', price:140  },
    { id: 56,img:"items/ice/mixed-.webp", name: 'Mixed Ice-Cream', quan:'4 Scoops', price: 180 },
    { id: 57,img:"items/ice/mixedberryripple.jpeg", name: 'Mixed Berry Ripple', quan:'3 Scoops', price:210  },
    { id: 58,img:"items/ice/oreoo.jpg", name: 'Oreo Ice-Cream', quan:'700ml', price:530  },
    { id: 59,img:"items/ice/Mango.jpg", name: 'Mango Ice-Cream', quan:'1L', price:490  },
    { id: 60,img:"items/ice/pista.jpeg", name: 'Pista Ice-Cream', quan:'500ml', price:210  },
    { id: 61,img:"items/ice/raspberry.jpg", name: 'Raspberry Ice-Cream', quan:'4 Scoops', price:270  },
    { id: 62,img:"items/ice/strawberry.jpg", name: 'Strawberry Ice-Cream', quan:'1L', price:460},
    { id: 63,img:"items/ice/vanillabutterscotch.jpg", name: 'Vanilla-Butterscotch Ice-Cream', quan:'850ml', price:430  },
    { id: 64,img:"items/milkshakes/Grapefruit-Mocktail.jpg", name: 'GrapeFruit Mocktail', quan:'', price:  95},
    { id: 65,img:"items/milkshakes/kitkatmilkshake.webp", name: 'kitkat Milkshake', quan:'1', price: 99 },
    { id: 66,img:"items/milkshakes/lassi.jpg", name: 'Lassi', quan:'1', price:30},
    { id: 67,img:"items/milkshakes/Blue-Lagoon-Mocktail-Tasty.webp", name: 'Blue Laggon Mocktail', quan:'1', price: 55 },
    { id: 68,img:"items/milkshakes/blueberry.jfif", name: 'BlueBerry Milkshake', quan:'1', price: 85 },
    { id: 69,img:"items/milkshakes/mango.jpg", name: 'Mango Lassi', quan:'1', price:  75},
    { id: 70,img:"items/milkshakes/peanutbuttermilkshake.webp", name: 'Peanut Butter Milkshake', quan:'1', price:70},
    { id: 71,img:"items/milkshakes/Gingerbread-House-MilkShakes.jpg", name: 'Gingerbread Milkshake', quan:'1', price: 110 },
    { id: 72,img:"items/milkshakes/Green-Cucumber-Mocktail.jpg", name: 'Cucumber Mocktail', quan:'1', price:120  },
    { id: 73,img:"items/milkshakes/green.jfif", name: 'creamy Milkshake', quan:'1', price: 110 },
    { id: 74,img:"items/milkshakes/choco.jpg", name: 'Chocolate Milkshake', quan:'1', price: 70 },
    { id: 75,img:"items/milkshakes/mojitomocktail.jpg", name: 'Mojito Mocktail', quan:'1', price: 75 },
    { id: 76,img:"items/milkshakes/oreo.jpg", name: 'Oreo Milkshake', quan:'1', price: 140 },
    { id: 77,img:"items/milkshakes/falooda.webp", name: 'Falooda', quan:'', price: 130 },
    { id: 78,img:"items/milkshakes/punjabilassi.jpg", name: 'Punjabi Lassi', quan:'1', price:80  },
    { id: 79,img:"items/milkshakes/rainbow-milkshake.webp", name: 'Rainbow Milkshake', quan:'1', price:129  },
    { id: 80,img:"items/milkshakes/simple-dragonfruit-mocktail.jpg", name: 'Dragon Fruit Mocktail', quan:'1', price: 95 },
    { id: 81,img:"items/milkshakes/strawberrymocktail.jpeg", name: 'Strawberry Mocktail', quan:'1', price:  95},
    { id: 82,img:"items/milkshakes/summermocktail.jpg", name: 'Summer Mocktail', quan:'1', price: 150 },
    { id: 83,img:"items/milkshakes/sweetlassi.webp", name: 'Spl Sweet Lassi', quan:'1', price: 69 },
    { id: 84,img:"items/milkshakes/sunrisemocktail.jpg", name: 'Sunrise Mocktail', quan:'1', price: 105 },
    { id: 85,img:"items/milkshakes/vanila.jpg", name: 'Vanilla Milkshake', quan:'1', price:95  }



    
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