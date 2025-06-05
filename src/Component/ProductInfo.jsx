import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from './Card';

export default function ProductInfo() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState(null);
    const start = Math.floor((Math.random() * 25))
    console.log(start)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products`);
                const jsonData = await response.json();
                setSimilar(jsonData.products)
                const found = jsonData.products.find((p) => p.id === +id);
                setProduct(found);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, [id]);

    if (!product) return <div className='p-4 text-center text-light bg-success mt-4'>Loading...</div>

    return (
        <div className="container">
            <h2 className='bg-dark p-1 text-center mt-3 text-white'>{product.title}</h2>
            <div className="d-flex">
                <img src={product.thumbnail} alt={product.title} className='img-fluid' />
                <div className=" border border-dark p-4 mt-3">
                    <p className=' fw-bold text-success text-center text-capitalize'>{product.category}</p>
                    <div className=" d-flex justify-content-evenly">
                        <div className='d-flex justify-content-center'>
                            Rating : <i className=' ms-1 bi bi-star'></i>
                            <p className=' ms-2'> {product.rating}</p>
                        </div>
                        <p> Review : {product.reviews.length}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                    </div>
                    <div className='d-flex text-center ms-auto text-capitalize'>
                        <h3 className='mt-3 w-25'> Tags :</h3>
                        <div className='d-flex mt-3'>
                            <p>  {product.tags[0]}</p>
                            <p> , {product.tags[1]}</p>
                        </div>
                    </div>
                    <div className='d-flex text-center ms-auto text-capitalize'>
                        <h3 className='mt-3 w-25'> Brands :</h3>
                        <div className='d-flex mt-3'>
                            <p>  {product.brand}</p>

                        </div>
                    </div>

                    <div className="d-flex ">
                        <h3 className='mt-3'>Description:</h3>
                        <p className="mt-3 text-center">   {product.description}</p>
                    </div>
                    <div className="btn-group d-flex">
                        <button className='btn btn-primary '>Buy Now</button>
                        <Link to='/'><button className='btn btn-success mx-1 '>Shop More</button></Link>
                        <button className='btn btn-dark '>Add to Wishlist</button>
                    </div>
                </div>
            </div>

            <div className='w-100 mt-3 ps-4'>
                {
                    product.reviews.slice(0, 2).map((com, index) => {
                        return (
                            <div key={index} className='bg-secondary w-75 ms-auto'>
                                <p className='  text-center  text-light fs-6'>Comment : {com.comment}</p>
                                <p className='  text-center  text-light fs-6'>ReviewerNam : {com.reviewerName}</p>
                                <p className='  text-center  text-light fs-6'>ReviewerEmail : {com.reviewerEmail}</p>
                            </div>
                        )

                    })
                }
            </div>

            <div>
                <h2 className='text-center p-2 bg-dark text-light'>Similar Product</h2>
                <div className="row p-5 w-100">
                    {Array.isArray(similar) && similar.slice(start, start + Number(4)).map((product, index) => (
                        <div key={index} className="col-lg-3 col-md-6 mb-4">
                            <Card product={product} />
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}
