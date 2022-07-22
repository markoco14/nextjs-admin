import Link from "next/link";
import { Row, Col, Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons'


export default function Layout({ children }) {

    return (
        <>
            <header style={{ backgroundColor: "#1f1f1f"}}>
                <Row style={{flexFlow: 'nowrap', height: '64px', backgroundColor: "#1f1f1f", color: "white", padding: '0 1rem'}}>
                    <Col span={6} style={{ display: 'flex', alignItems: 'center'}}>
                        <span style={{fontSize: '2rem'}}>Productly</span>
                    </Col>
                    <Col span={18} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                        <Link href={`/`}>
                            <a>Log Out</a>
                        </Link>
                        <Menu
                            className='show-800'
                            mode='vertical'
                            title='Menu'
                            style={{ backgroundColor: '#1f1f1f' }}
                            icon={<MenuOutlined style={{ color: 'white', width: '1rem', height: '1rem' }}/>}
                        >
                            <Menu.SubMenu>
                                <Menu.Item>
                                    <Link href={`/admin`}>
                                        <a>Home</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.SubMenu key="SubMenu" title="Products">
                                    <Menu.Item>
                                        <Link href={`/admin/products`}>
                                            <a>Catalogue</a>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link href={`/admin/products/manage`}>
                                            <a>Manage</a>
                                        </Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.Item>
                                    <Link href={`/admin/stats`}>
                                        <a>Stats</a>
                                    </Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </header>
            <main>
                <Row style={{flexFlow: 'nowrap', minHeight: '100vh', backgroundColor: '#1f1f1f', color: 'white'}}>
                    <Col 
                        style={{ minWidth: '150px' }}
                        className="hide-800"
                    >
                        <Menu
                            className='hide-800'
                            style={{ backgroundColor: '#1f1f1f' }}
                        >
                            <Menu.Item>
                                <Link href={`/admin`}
                                >
                                    <a style={{ color: 'white' }}>Home</a>
                                </Link>
                            </Menu.Item>
                            <Menu.SubMenu key="SubMenu" title="Products" style={{ color: 'white' }}>
                                <Menu.Item>
                                    <Link href={`/admin/products`}>
                                        <a>Catalogue</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link href={`/admin/products/manage`}>
                                        <a>Manage</a>
                                    </Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item>
                                <Link href={`/admin/stats`}>
                                    <a style={{ color: 'white' }}>Stats</a>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col 
                        style={{ backgroundColor: 'white', width: '100%'}}
                    >
                        {children}
                    </Col>
                </Row>
            </main>
        </>
    );
}