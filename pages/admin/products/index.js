import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import Link from "next/link";
// import products from "../../../fixtures/products";
import defaultProductPic from '../../../public/images/default-product-image.jpg'
import Image from "next/image";
import Layout from "../../../components/adminLayout";
import { Card } from "antd";

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
            <Card>
                <h1>Product Catalogue</h1>
                <div className="grid product-grid">
                    {products?.map((product) => (
                        <Card
                            key={product.id}
                        >
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <img 
                                src={product.image? product.image : defaultProductPic.src}
                                alt="An image of clothing"
                                className="product-card-image"
                            ></img>
                        </Card>
                    ))}
                </div>
            </Card>
        </Layout>
    );
}