import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import Link from "next/link";
// import products from "../../../fixtures/products";
import defaultProductPic from '../../../public/images/default-product-image.jpg'
import Layout from "../../../components/adminLayout";
import { Card, Image } from "antd";

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
                            <Image 
                                src={product.image? product.image : defaultProductPic.src}
                                className="product-card-image"
                                width={'100%'}
                                alt={product.name}
                            />
                            <div className="product-card-text-container">
                                <h3 className="product-card-heading">
                                    {product.name}
                                </h3>
                                <p>{product.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>
        </Layout>
    );
}