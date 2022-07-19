import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import Link from "next/link";
import products from "../../../fixtures/products";

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
                {products?.map((product) => (
                    <article key={product.id} style={{width: "25%"}}>
                        <p style={{maxWidth: "35ch", fontWeight: 600 }}>{product.title}</p>
                        <img src={product.image} width="100%" style={{objectFit: "cover"}}></img>
                    </article>
                ))}
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