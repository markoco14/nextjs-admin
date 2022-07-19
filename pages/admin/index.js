import Link from "next/link";

export default function AdminHome () {
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
            <h1>Welcome to the Admin section</h1>
        </>
    );
}