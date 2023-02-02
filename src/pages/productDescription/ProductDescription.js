import react from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Carousel from 'nuka-carousel';


import "../../styles/ProductDescription.css";

function ProductDescription({productList}) {
    const { id } = useParams();
    const [currentDescription, setCurrentDescription] = useState();

    const shopingArray =[];
    

    const makeOrder = (all) => {
      shopingArray.push({
        productName: currentDescription.name,
        prize: currentDescription.price,
        size: all
      });
      return(console.log(shopingArray))
    }
    

    useEffect(() => {
        if (productList) {
            productList.forEach((product) => { 
                const colorToSet = product.colors.find((color) => color.id == id ); 
                if (colorToSet) { 
                  setCurrentDescription(colorToSet); 
                }
              });
        };
     }, [productList]);

     console.log(currentDescription);

    return (
        <div>
            {currentDescription && (<div className="product-detail-page">
              <div className="product-image-holder">
              <Carousel
                renderBottomCenterControls={({ currentSlide, slideCount, goToSlide }) => (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={() => goToSlide(currentSlide - 1)}>
                      <i className="fas fa-chevron-left" />
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '0 10px' }}>
                      {currentSlide + 1} of {slideCount}
                    </div>
                    <button onClick={() => goToSlide(currentSlide + 1)}>
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                )}
              >
                {currentDescription.images.map((myImg) => (<img src={myImg} className="product-img" alt="Product Image" />))}
              </Carousel>
              </div>
              <div className="product-info">
                <h2 className="product-title">{currentDescription.name}</h2>
                <p className="product-price">{currentDescription.price} грн</p>
                <p className="product-description">{currentDescription.description}</p>
                <ul className="product-details-list">
                  <li className="product-color">Колір: {currentDescription.color}</li>
                  <li className="product-material">Матеріал: 100% Cotton</li>
                  
                  <li className="product-size">
                    Size:
                    <ul className="size-options-list">
                      {currentDescription.sizes.map((all) => (
                            <li>
                              <button className="size-option" onClick={makeOrder}>{all}</button>
                            </li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <button className="add-to-cart-button">Замовити</button>
              </div>
            </div>
            )}        
        </div>
    );
};

export default ProductDescription;