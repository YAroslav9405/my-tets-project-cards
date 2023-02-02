import React,{useState, useEffect} from 'react';
import { Routes,Route } from 'react-router';
import ProductList from './pages/product/ProductsList';
import ProductDescription from './pages/productDescription/ProductDescription';
import ProductDetails from './pages/productDetails/ProductDetails';

export default function App() {
  const [productList, setProductList] = useState();

  const products = [
    {
      id: 1,
      name: 'Футболка',
      colors: [
        {
          id: '1e',
          name: 'Футболка',
          color: 'чорний',
          images: ['/images/1/black_front.png', '/images/1/black_back.png'],
          price: '123.00',
          description: 'Опис для "Футболка чорної"',
          sizes: ['XS', 'S', 'M'],
        },
        {
          id: '2e',
          name: 'Футболка',
          color: 'білий',
          images: ['/images/1/white_front.png', '/images/1/white_back.png'],
          price: '125.00',
          description: 'Опис для "Футболка білої"',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
        },
        {
          id: '3e',
          name: 'Футболка',
          color: 'сірий',
          images: ['/images/1/gray_front.png', '/images/1/gray_back.png'],
          price: '120.00',
          description: 'Опис для "Футболка сірий"',
          sizes: ['L'],
        },
      ],
    },
  
    {
      id: 2,
      name: 'Майка',
      colors: [
        {
          id: '1a',
          name: 'Майка',
          color: 'жовтий',
          images: ['/images/2/yellow_front.png', '/images/2/yellow_back.png'],
          price: '88.00',
          description: 'Опис для "Майка жовта"',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
        },
        {
          id: '2a',
          name: 'Майка',
          color: 'синій',
          images: ['/images/2/blue_front.png', '/images/2/blue_back.png'],
          price: '89.00',
          description: 'Описание для "Майка синій"',
          sizes: ['S'],
        },
        {
          id: '3a',
          name: 'Майка',
          color: 'чорний',
          images: ['/images/2/black_front.png', '/images/2/black_back.png'],
          price: '90.00',
          description: 'Опис для "Майка чорний"',
          sizes: ['XL'],
        },
      ],
    },
  ];
  
  useEffect(() => {
    setProductList(products);
    
}, []);

  return (
    <Routes>
          <Route path="/" element={<ProductList productList={productList} />} />
          <Route path='/:id'  element={<ProductDetails productList={productList}/>} />
          <Route path='/productDescription/:id'  element={<ProductDescription productList={productList}/>} />
    </Routes>
  )
}
