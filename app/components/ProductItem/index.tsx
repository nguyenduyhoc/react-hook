import React from 'react';

//Khởi tạo kiểu dữ liệu

interface ProductItemProps {
  //Mở đầu thì cho đơn giản chỉ cần khai báo các kiểu dữ liệu như string, number với any thôi
  //Những props đã khai báo ở đây thì bắt buộc phải đc truyền vào
  product: any;
}

export const ProductItem: React.FC<ProductItemProps> = props => {
  // khai báo product là 1 props
  const { product } = props;
  return (
    <div >
      <h5>{product.name}</h5>
      <div>{product.price}</div>
    </div>
  );
};
