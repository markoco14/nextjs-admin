import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import Link from "next/link";
import products from "../../../fixtures/products";
import defaultProductPic from '../../../public/images/default-product-image.jpg'
import Image from "next/image";
import Layout from "../../../components/adminLayout";

// createServer({
//     fixtures: {
//         products,
//     },

//     routes() {
//         this.get('/api/products', () => {
//             return products;
//         })

//         this.passthrough();

//         // server.shutdown();
//     }
// })

export default function ProductsHome() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
        .then((res) =>
            res.json())
        .then((json) => {
            console.log(json);
            setProducts(json)
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
                                <p>{product.title}</p>
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