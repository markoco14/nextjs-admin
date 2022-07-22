import { useState, useEffect } from "react"
import { createServer } from "miragejs";
import { Button, Modal, Form, Input, Radio } from "antd";
// import products from "../../../fixtures/products";
import Layout from "../../../components/adminLayout";

export default function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');
    const [newProductCategory, setNewProductCategory] = useState('');
    const [newProductQuantity, setNewProductQuantity] = useState('');

    function openAddModal() {
        setIsModalVisible(true);
    }

    function handleCancel() {
        console.log('You clicked cancel');
        setIsModalVisible(false);
    }

    function onSetProductName(e) {
        setNewProductName(e.target.value);
    }

    function onSetProductPrice(e) {
        setNewProductPrice(e.target.value);
    }

    function onSetProductDescription(e) {
        setNewProductDescription(e.target.value);
        
    }

    function onSetProductCategory(e) {
        setNewProductCategory(e.target.value);
    }

    function onSetProductQuantity(e) {
        setNewProductQuantity(e.target.value);
        
    }

    function createProduct(e) {
        

        fetch('/api/products', {
            method: "POST",
            body: JSON.stringify({
                name: newProductName,
                price: newProductPrice,
                description: newProductDescription,
                category: newProductCategory,
                quantity: newProductQuantity
            }),
        })
        .then((res) => res.json())
        .then((json) => {
            setProducts((products) => [...products, json.product]);
        })

        console.log('Function finished, check network response')
        setIsModalVisible(false);
        // setNewProductName('');
        // setNewProductPrice('');
        // setNewProductDescription('');
        // setNewProductCategory('');
        // setNewProductQuantity('');
    }
    
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
            setProducts(json.products)
        });
    }, [])

    return (
        <Layout>
            <section className="section bg-white">
                <div className="container">
                    <div className="flex-between">
                        <h1>Manage Products</h1>
                        <Button type="primary" onClick={openAddModal}>Add Product</Button>
                        {/* <button onClick={openAddModal}>Add Product</button> */}
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
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button 
                                        onClick={() => {deleteProduct(product.id)}}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <Modal
                title="Add New Product"
                visible={isModalVisible}
                // onOk={createProduct}
                onCancel={handleCancel}
                destroyOnClose={true}
                okButtonProps={{ style: { display: 'none' } }}
            >
                <p>Add your product details in the form below. Edit functionality coming soon.</p>
                <Form
                    onFinish={createProduct}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please give your product a name.' }]}
                    >
                        <Input 
                            onChange={onSetProductName} 
                        />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please set a price for the product.' }]}
                    >
                        <Input 
                            onChange={onSetProductPrice} 
                        />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please write a description of the product.' }]}
                    >
                        <Input 
                            onChange={onSetProductDescription} 
                        />
                    </Form.Item>
                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: 'Please choose a category for the product.' }]}
                    >                        
                        <Radio.Group 
                            onChange={onSetProductCategory} 
                        >
                            <Radio value={`Men's`}>Men&apos;s</Radio>
                            <Radio value={`Women's`}>Women&apos;s</Radio>
                            <Radio value={`Children's`}>Children&apos;s</Radio>
                            <Radio value={`Pet's`}>Pet&apos;s</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please set the amount of product available.' }]}
                    >
                        <Input 
                            onChange={onSetProductQuantity} 
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
}