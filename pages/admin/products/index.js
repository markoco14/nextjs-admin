import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import Link from "next/link";
import products from "../../../fixtures/products";
import { Card, Image } from 'antd';
// import Image from "next/image";

const { Meta } = Card;

createServer({
    fixtures: {
        products,
    },

    routes() {
        this.get('/api/products', () => {
            return products;
        })

        this.passthrough();
    }
})

export default function ProductsHome() {
    let [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/api/products")
        .then((res) =>
            res.json())
        .then((json) => {
            setProducts(json)
        })
    }, [])

    return (
        <>
            <Link href={`/admin`}>
                <a>Admin</a>
            </Link>
            <Link href={`/admin/products`}>
                <a>Products</a>
            </Link>
            <Link href={`/admin/stats`}>
                <a>Stats</a>
            </Link>
            <Link href={`/`}>
                <a>Log Out</a>
            </Link>
            <h1>Welcome to the products page</h1>
            <div>
                <Card>
                    {products?.map((product) => (
                        <Card 
                            key={product.id} 
                            style={{ width: 240 }}
                            cover={
                                <Image 
                                    alt="A product image" 
                                    src={product.image} 
                                    style={{ maxWidth: "100%"}}
                                />
                            }
                        >                        
                            <Meta title={product.title} description={product.description} />
                        </Card>
                    ))}
                </Card>
            </div>
            {/* <ul>
                {products?.map((product) => (
                    <li key={product.id}>
                    {product.title} ({product.price})
                    </li>
                ))}
            </ul> */}
        </>
    );
}