import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function DataFetch() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const jsonData = await response.json();
                console.log(jsonData);
                setProducts(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <Card key={index} products={product} />
                ))}
            </div>
        </div>
    );
}
