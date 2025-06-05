import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ product }) {
    console.log("Hello", product.images)
    return (
        <div className="card" style={{ width: "18rem" }}>

            <img src={product.images} className="card-img-top" alt="..." />

            <div className="card-body">
                <div className=" d-flex justify-content-evenly">
                    <div className='d-flex justify-content-center'>
                        <i className='bi bi-star'></i>
                        <p className=' ms-2'> {product.rating}</p>
                    </div>
                    <p> Review : {product.reviews.length}</p>
                </div>

                <h5 className="card-title text-center">{product.title.slice(0, 15)}</h5>
                <p className=' fw-bold text-success text-center text-capitalize'>{product.category}</p>
                <p className="card-text text-center bg-info p-2 ">{product.description.slice(0, 50)}</p>
                {
                    product.reviews.map((com) => {
                        return <p className=' bg-secondary p-2 text-light fs-6'>Comment : {com.comment}</p>

                    })
                }


                <p className='bg-success text-light p-2 text-center '>Brand : {product.brand}</p>
                <div className='d-flex justify-content-center'> <Link to={`/productinfo/${product.id}`} className="btn btn-dark w-100 ">Buy Now</Link></div>
            </div>
        </div>
    )
}
