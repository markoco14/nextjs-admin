import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import products from "../../../fixtures/products";
import Layout from "../../../components/adminLayout";

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

export default function ManageProducts() {
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
        <Layout>
            <section className="section bg-white">
                <div className="container">
                    <h1>Manage Products</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Product Price</th>
                                <th>Product Category</th>
                                <th>Product Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products?.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.quantity}</td>
                                <td><div><button>Delete</button></div></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    );
}