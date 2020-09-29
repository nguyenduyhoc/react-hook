import React from 'react'

//Khởi tạo kiểu dữ liệu

interface ProductItemProps{
    product: any //Mở đầu thì cho đơn giản chỉ cần khai báo các kiểu dữ liệu như string, number với any thôi
}

export const ProductItem:React.FC<ProductItemProps>=(props)=>{

    return <div>ProductItem</div>
}