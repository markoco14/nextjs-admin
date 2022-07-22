import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <div className="header-container flex navbar">
                    <span className="logo">Logo</span>
                    <Link href={`/`}>
                        <a>Log Out</a>
                    </Link>
                </div>
            </header>
            <main>
                <div className="grid admin-grid">
                    <nav style={{ paddingTop: "3rem" }}>
                        <ul role="list" className="flex-column admin-navigation primary-admin-navigation">
                            <li className="nav-list-item">
                                <Link href={`/admin`}>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <p className="nav-list-item">Products</p>
                            <ul role="product-page-list" className="flex-column admin-navigation secondary-admin-navigation">
                                <li className="nav-list-item">
                                    <Link href={`/admin/products`}>
                                        <a>Catalogue</a>
                                    </Link>
                                </li>
                                <li className="nav-list-item">
                                    <Link href={`/admin/products/manage`}>
                                        <a>Manage</a>
                                    </Link>
                                </li>
                            </ul>
                            <li className="nav-list-item">
                                <Link href={`/admin/stats`}>
                                    <a>Stats</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {children}
                </div>
            </main>
        </>
    );
}