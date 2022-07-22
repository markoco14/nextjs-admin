import Link from "next/link";
import Layout from "../../components/adminLayout";
import { Card } from 'antd';

// import { makeServer } from "../../mirage"

// if (
//     process.env.NODE_ENV === "development" &&
//     typeof makeServer === "function"
// ) {
//   makeServer({ environment: "development"})
// } else if (
//     process.env.NODE_ENV === "production" ||
//     process.env.REACT_APP_DEMO
//   ) {
//     makeFinalServer(); // For a live demo when deploying to Vercel
//   }

export default function AdminHome () {
    return (
        <Layout>
            <Card>
                <h1>Hi New User, welcome to your dashboard.</h1>
                <p>You can manage all your products from one place.</p>
                <p>Add, Edit, and Delete products as your catalogue changes.</p>
                <p>Review your stats to see which products are performing well &#8212; or poorly.</p>
            </Card>
        </Layout>
    );
}