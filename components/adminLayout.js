import Link from "next/link";

export default function Layout({ children }) {
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
                {children}
            </main>
            
        </>
    );
}