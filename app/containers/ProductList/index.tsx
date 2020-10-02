import React from 'react'
import 

//Khởi tạo 1 kiểu dữ liệu mới, là kiểu dữ liệu của props sẽ được truyền vào
interface ProductListProps{}

export const ProductList:React.FC<ProductListProps>=(props)=>{

	const [data,setData]=useState(product)
    return <div>
	<div>ProductList</div>
		{data.map((item,index)=>{
			return <ProductItem/>
		}}
	</div>
}