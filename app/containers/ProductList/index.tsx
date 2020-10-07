import Axios from 'axios';
import { ProductItem } from 'components/ProductItem';
import React, { useEffect, useState } from 'react';
import { tempData } from 'utils/data';

//Khởi tạo 1 kiểu dữ liệu mới, là kiểu dữ liệu của props sẽ được truyền vào
interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = props => {
  const [listProduct, setListProduct] = useState([] as any[]);

  //Khai báo function trong hook
  const getProduct = async() => {
    // async function dùng để chạy các function bất đồng bộ
    //dùng await sẽ lấy đc data từ api mà hk cần .then()
    let response = await Axios.get('https://mapi.sendo.vn/mob/product')
    console.log(response)
    return response
  };


  useEffect(() => {
    let product = getProduct();
  }, [getProduct]);

  return (
    <div>
      <div>ProductList</div>
      {listProduct.map((item, index) => {
        return <ProductItem product={item} key={index} />;
      })}
    </div>
  );
};


