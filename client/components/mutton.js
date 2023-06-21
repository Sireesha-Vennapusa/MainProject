import {React,useState} from "react";
import './cards.css';
import axios from "axios";
export function Cards(){
  const menuItems = [
    { id: 22, img:"items/mutton/bawarchibryni.jpg" ,name: 'Bawarchi Biryani',quan:'full plate' ,price: 280},
    { id: 23,img:"items/mutton/boti.jpg", name: 'Boti',quan:'500gms' ,price:350  },
    { id: 24,img:"items/mutton/kheema.jpg", name: 'kofta', quan:'500gm', price:400  },
    { id: 25,img:"items/mutton/fishbryni.jfif", name: 'Fish Biryani', quan:'full plate', price:450  },
    { id: 26,img:"items/mutton/prawnsfry.webp", name: 'Prawns Fry', quan:'250 gms', price: 499 },
    { id: 27,img:"items/mutton/fishfry.jpg", name: 'Fish Curry', quan:'500 gms', price:300  },
    { id: 28,img:"items/mutton/fishpkoda.jpg", name: 'Fish Pakoda', quan:':6 pieces', price:300  },
    { id: 29,img:"items/mutton/friedprawns.cms", name: 'Fried prawns', quan:'500 gms', price:600  },
    { id: 30,img:"items/mutton/garlicbttrfish.jpg", name: 'Garlic Butter Fish', quan:'3 pieces', price: 350 },
    { id: 31,img:"items/mutton/gongura mutton.jpg", name: 'Spl Gongura Mutton', quan:'1 kg', price: 999 },
    { id: 32,img:"items/mutton/liver kidney.jpg", name: 'Liver & Kidney', quan:'250 gms', price: 300 },
    { id: 33,img:"items/mutton/prawnsbryni.jpg", name: 'Prawns Biryani', quan:'Full Plate ', price:700  },
    { id: 34,img:"items/mutton/mtnhaleem.jfif", name: 'Mutton  Hyd Haleem<', quan:'Full', price: 250 },
    { id: 35,img:"items/mutton/seekh kabab.webp", name: 'Sheekh Kabab', quan:'3 Sticks', price: 200 },
    { id: 36,img:"items/mutton/redfish.jpg", name: 'Spl Red Fish', quan:'3 pieces', price:  189},
    { id: 37,img:"items/mutton/prawn malai curry.webp", name: 'Prawns Malai Curry', quan:'500 gms', price:789  },
    { id: 38,img:"items/chicken/bbq chicken pizza.jpg", name: 'BBQ Chicken Pizza<', quan:'1', price: 295},
    { id: 39,img:"items/chicken/biryani.jpg", name: 'Chicken Biryani', quan:'Serves 2-3', price:310  },
    { id: 40,img:"items/chicken/chickpopcorn.jpg", name: 'Chicken Popcorn', quan:'400gm', price:250  },
    { id: 41,img:"items/chicken/springrollschicken.jpg", name: 'Chicken SpringRolls', quan:'5', price:75  },
    { id: 42,img:"items/chicken/tandoori.jpg", name: 'Tandoori Chicken', quan:'750gm', price:420  },
    { id: 43,img:"items/chicken/Simple-Chicken-Pulao.jpg", name: 'Chicken Pulao', quan:'Serves 3-4', price:620  },
    { id: 44,img:"items/chicken/tikka.jpg", name: 'Chicken Tikka', quan:'250 gms', price:200  },
    { id: 45,img:"items/chicken/chickenburger.jpg", name: 'Cheese Chicken Burger', quan:'1', price: 145 },
    { id: 46,img:"items/chicken/tandoori-biryani.webp", name: 'Tandoori Chicken Biryani ', quan:'Serves 2-3', price:280  },
    { id: 47,img:"items/chicken/chickenwings.webp", name: 'Chicken Wings', quan:' 6 pieces', price: 270 },
    { id: 48,img:"items/chicken/zingerburger.png", name: 'Zinger Burger (Chicken)', quan:'1', price: 120 },
    { id: 49,img:"items/chicken/pizza.webp", name: 'Chicken Pizza', quan:'1', price: 270 },
    { id: 50,img:"items/chicken/chickfriedrice.webp", name: 'Chicken Fried Rice', quan:'Serves 2-3', price: 210 }
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
