import Link from "next/link";
import Layout from "../../components/adminLayout";
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
            <section className="section bg-white">
                <div className="container">
                    <h1>Welcome to the Admin section</h1>
                </div>
            </section>
        </Layout>
    );
}