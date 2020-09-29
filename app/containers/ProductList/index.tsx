import React from 'react'

//Khởi tạo 1 kiểu dữ liệu mới, là kiểu dữ liệu của props sẽ được truyền vào
interface ProductListProps{}

export const ProductList:React.FC<ProductListProps>=(props)=>{
    return <div>ProductList</div>
}