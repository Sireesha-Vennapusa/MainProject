import React from "react";
import arab from './items/arabian/name.jpg';
import veg from './items/arabian/bawarchi.jpg';
import nveg from './items/arabian/Rest.png';
import bak from './items/arabian/bake.jpg';
import ice from './items/arabian/milk.jpg';
import './cardeff.css';
import {useNavigate} from 'react-router-dom';
export function Restaurants(){
      let n=useNavigate();
      
      function attayeb(){
          n('/Menu');
        }
      function grill(){
          n('/Cards');
      }
      function bawar(){
          n('/BawarchiMenu');
      }
      function bake(){
          n('/Cakes');
      }
      function milks(){
          n('/Ice');
      }


    return(
      <>
      <section className="spc" id="spc">
      <div className="box-container" >
       <div className="box">
         <img className="image" src={arab} alt='...' onClick={attayeb} ></img>
        <div className="content">
         <h5>Attayeb Restaurant </h5>
            <p>Attayeb is the cuisine of the Arabs, serving the delicious Arabic cuisines made with passion and attention to “Tingle your taste buds!”. Prepare yourself for a delightful journey through the vibrant flavors and aromas of Arabic cuisine.</p>
       </div>
       </div>
       <div className="box">
         <img className="image" src={nveg} alt='...' onClick={grill}></img>
        <div className="content">
         <h5>Grill Park Restaurant</h5>
            <p>Grill Park: Unleash your carnivorous cravings and surrender to the tempting world of non-vegetarian delights.Kickstart your culinary journey with an array of tantalizing appetizers. Grab your favourite non-veg dishes to enjoy every moment. </p>
       </div>
       </div>
       <div className="box"> 
         <img className="image" src={veg} alt='...' onClick={bawar}></img>
        <div className="content">
         <h5>Bawarchi Restaurant </h5>
            <p>Indulge in a delectable journey of vegetarian cuisine at Bawarchi, where every dish is a masterpiece crafted with love and fresh ingredients. Experience a symphony of flavors that will tantalize your taste buds and leave you craving for more.</p>
       </div>
       </div>
       <div className="box">
         <img className="image" src={bak} alt='...'onClick={bake}></img>
        <div className="content">
         <h5>Baker's Kitchen</h5>
            <p>From fluffy pastries to decadent cakes, let our artisanal creations transport you to a world of pure delight.Baker's Kitchen strives to serve you the piece of goodness filled with sweetness and love to fulfill every occasion.</p>
       </div>
       </div>
       <div className="box">
         <img className="image" src={ice} alt='...' onClick={milks}></img>
        <div className="content">
         <h5>Shake Crazy</h5>
            <p>Shake Crazy, the ultimate destination for milkshake and ice cream enthusiasts. Get ready to embark on a delightful journey through a world of creamy indulgence and heavenly flavors.</p>
       </div>
       </div>
       </div> 
       </section> 
     </>
        )
}