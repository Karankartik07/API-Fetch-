import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Data() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products`);
                const jsonData = await response.json();
                console.log(jsonData)
                setProducts(jsonData.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);



    return (
        <>
            <div className="row p-5 w-100">
                {products.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-6 mb-4">
                        <Card product={product} />
                    </div>
                ))}
            </div>



        </>
    )
}
