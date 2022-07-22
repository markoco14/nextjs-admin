import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import Link from "next/link";
import products from "../../../fixtures/products";
import defaultProductPic from '../../../public/images/default-product-image.jpg'
import Image from "next/image";
import Layout from "../../../components/adminLayout";


export default function ProductsHome() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
        .then((res) =>
            res.json())
        .then((json) => {
            setProducts(json.products)
        });
    }, [])

    return (
        <Layout>
            <section className="section bg-white">
                <div className="container">
                    <h1>Product Catalogue</h1>
                    <div className="grid product-grid">
                        {products?.map((product) => (
                            <article key={product.id}>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <img 
                                    src={product.image? product.image : defaultProductPic.src}
                                    alt="An image of clothing"
                                    className="product-card-image"
                                ></img>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}