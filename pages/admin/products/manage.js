import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import { Button } from "antd";
// import products from "../../../fixtures/products";
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

//     }
// })


export default function ManageProducts() {
    const [products, setProducts] = useState([]);

    function deleteProduct(id) {
        fetch(`/api/products/${id}`, { method: "DELETE"});
        setProducts((products) => 
            products.filter((product) => product.id !== id)
        );
    }

    useEffect(() => {
        fetch("/api/products")
        .then((res) =>
            res.json()
            )
        .then((json) => {
            setProducts(json)
        });
    }, [])

    return (
        <Layout>
            <section className="section bg-white">
                <div className="container">
                    <div className="flex-between">
                        <h1>Manage Products</h1>
                        {/* <Button type="primary" onClick={()=> {console.log("You clicked the button")}}>Add Product</Button> */}
                        <button onClick={() => {console.log("You clicked the add button")}}>Add Product</button>
                    </div>
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
                                {/* <td><a href={`/api/products/${product.id}`}>Delete</a></td> */}
                                <td><button onClick={() => {deleteProduct(product.id)}}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    );
}