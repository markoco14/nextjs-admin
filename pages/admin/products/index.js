import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import Link from "next/link";
import products from "../../../fixtures/products";
import defaultProductPic from '../../../public/images/default-product-image.jpg'
import Image from "next/image";

createServer({
    fixtures: {
        products,
    },

    routes() {
        this.get('/api/products', () => {
            return products;
        })

        this.passthrough();

        // server.shutdown();
    }
})

export default function ProductsHome() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
        .then((res) =>
            res.json())
        .then((json) => {
            setProducts(json)
        });
    }, [])

    return (
        <>
        <header>
            <div className="container flex navbar">
                <span className="logo">Logo</span>
                <nav>
                    <ul role="list" className="flex navigation-list">
                        <li>
                            <Link href={`/admin`}>
                                <a>Admin</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/admin/products`}>
                                <a>Products</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/admin/stats`}>
                                <a>Stats</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/`}>
                                <a>Log Out</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <section className="section bg-white">
                <div className="container">
                    <h1>Products Page Customer View</h1>
                    <div className="grid product-grid">
                        {products?.map((product) => (
                            <article key={product.id}>
                                <p>{product.title}</p>
                                <p>{product.description}</p>
                                {/* <Image 
                                    src={product.image}
                                    alt="An image of clothing"
                                    layout="fill"
                                    className="product-card-image"
                                /> */}
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
        </main>
        </>
    );
}