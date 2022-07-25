import Link from "next/link";
import { useState } from 'react';
import { Row, Col, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons'
import { withRouter } from "next/router";

export default function Layout({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    const showDrawer = () => {
        setIsVisible(true);
    };

    const onClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            <header style={{ backgroundColor: "#1f1f1f"}}>
                <Row style={{flexFlow: 'nowrap', height: '64px', backgroundColor: "#1f1f1f", color: "white", padding: '0 1rem'}}>
                    <Col span={6} style={{ display: 'flex', alignItems: 'center'}}>
                        <span style={{fontSize: '2rem'}}>Productly</span>
                    </Col>
                    <Col span={18} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '1rem'}}>
                        <Link href={`/`}>
                            <a>Log Out</a>
                        </Link>
                        <Button 
                            className="show-800"
                            onClick={showDrawer}
                            ghost='true'
                            shape='circle'
                        >
                            <MenuOutlined />
                        </Button>
                        <Drawer
                            width='250px'
                            className='show-800'
                            placement="right"
                            visible={isVisible}
                            onClose={onClose}
                        >
                            <Menu
                                mode="inline"
                            >
                                <Menu.Item key='1'>
                                    <Link href={`/admin`}>
                                        <a>Home</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.SubMenu
                                    title="Products"
                                    type="vertical"
                                >
                                    <Menu.Item key='2'>
                                        <Link href={`/admin/products`}>
                                            <a>Catalogue</a>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key='3'>
                                        <Link href={`/admin/products/manage`}>
                                            <a>Manage</a>
                                        </Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.Item key='4'>
                                    <Link href={`/admin/stats`}>
                                        <a>Stats</a>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Drawer>
                    </Col>
                </Row>
            </header>
            <main>
                <Row style={{flexFlow: 'nowrap', minHeight: '100vh'}}>
                    <Col 
                        style={{ minWidth: '200px', backgroundColor: 'white' }}
                        className="hide-800"
                    >
                        <Menu
                            mode='inline'
                            className='hide-800'

                            style={{ minHeight: '100%' }}
                        >
                            <Menu.Item>
                                <Link href={`/admin`}
                                >
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