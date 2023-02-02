import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Cards.css'

function Cards(props) {

    
    return (
       <div className="card-holder">
           {props.items.map((products) => (
               <Link to={`/${products.id}`} key={products.id} className="card-wrapper">
                   <div className="img-holder">
                       <img src={products.colors[0].images[0]} alt="product-img" className="main-img" />
                   </div>
                   <div className="link-wrapper">
                        <div to={`/${products.id}`} className="product-name">{products.name}</div>
                   </div>
               </Link>
           ))}
       </div>
    );
}

export default Cards;