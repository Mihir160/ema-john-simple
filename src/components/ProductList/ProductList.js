import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductList = () => {
    const [productList, setProductList] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProductList(data))
    },[])
    console.log(productList)
    return (
        <div>
           <div>
        <h3 className="text-3xl mb-5">Product List</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                  
                        <th>category</th>
                        <th>name</th>
                        
                        <th>seller</th>
                        <th>price</th>
                       
                    </tr>
                </thead>
                <tbody>
                       {
                        productList && productList?.map((productList)=><tr key={productList.id}>
                            <td>{productList.category}</td>
                            <td>{productList.name}</td>
                            <td>{productList.seller}</td>
                            <td>{productList.price}</td>
                        </tr>)
                       }
                </tbody>
            </table>
        </div>
    </div> 
        </div>
    );
};

export default ProductList;