import react from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Cards.css';

function ProductDetails({productList}) {
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState();
    
    useEffect(() => {
        if(productList) {
            setCurrentProduct(productList.find(prod => prod.id == id));
        };
        
        
     }, [productList]);

     if(!currentProduct) return null;
     

    return (
        <div className="card-holder">
        {currentProduct.colors.map((productsColor) => (
            <Link to={`/productDescription` + `/${productsColor.id}`} key={productsColor.id} className="card-wrapper">
                <div className="img-holder">
                    <img src={productsColor.images[0]} alt="product-img" className="main-img" />
                </div>
                <div className="link-wrapper">
                    <div className="product-name link">{productsColor.name}</div>
                </div>
                <div className="link-wrapper">
                    <div className="product-name price">{productsColor.price} грн</div>
                </div>
            </Link>
        ))}
    </div>
    );
};

export default ProductDetails;