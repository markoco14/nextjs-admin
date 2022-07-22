import Link from "next/link";
import Layout from "../../components/adminLayout";
import { makeServer } from "../../mirage"

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development"})
}

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