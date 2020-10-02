import { ProductItem } from 'components/ProductItem';
import React, { useEffect, useState } from 'react';
import { tempData } from 'utils/data';

//Khởi tạo 1 kiểu dữ liệu mới, là kiểu dữ liệu của props sẽ được truyền vào
interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = props => {
  const [listProduct, setListProduct] = useState([] as any[]);

  //Đọc docs sẽ biết useEffect dùng để chạy những funct trước khi render UI
  //Thường nó sẽ dùng để gọi function lấy data từ API rồi xử lý các bước cơ bản với data
  useEffect(() => {
    //Giờ t sẽ set data giả từ file data.ts vào state
    setListProduct(tempData);
  }, [tempData]);

  return (
    <div>
      <div>ProductList</div>
      {listProduct.map((item, index) => {
        return <ProductItem product={item} key={index} />;
      })}
    </div>
  );
};
