import Link from "next/link";
import Layout from "../../components/adminLayout";
import { Card } from 'antd';

export default function AdminHome () {
    return (
        <Layout>
            <Card>
                <h1>Hi New User, welcome to your dashboard.</h1>
                <p>You can manage all your products from one place.</p>
                <p>Add, Edit, and Delete products as your catalogue changes.</p>
                <p>Review your stats to see which products are performing well, and which are performing poorly.</p>
            </Card>
        </Layout>
    );
}