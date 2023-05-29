import { useNavigate } from "react-router-dom";
import { Layout, Dropdown, Menu, Button } from "antd";
import { useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";

import { authToken } from "../../../helpers/store/token";

import "./style.css"

type NavItem = {
    key: string;
    label: string;
    style?: React.CSSProperties;
    onClick: () => void;
};

const NavBar = () => {
    const navigate = useNavigate();
    const setToken = useSetRecoilState(authToken);
    const [mobileSize, setMobileSize] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileSize(true);
        }
    }, []);

    const navList: NavItem[] = [
        {
            key: "Accueil",
            label: "Accueil",
            style: { fontSize: 15 },
            onClick: () => {
                navigate("/home");
            },
        },
        {
            key: "Page 1",
            label: "Page 1",
            style: { fontSize: 15 },
            onClick: () => {
                navigate("/home/#");
            },
        },
        {
            key: "Page 2",
            label: "Page 2",
            style: { fontSize: 15 },
            onClick: () => {
                navigate("/home/#");
            },
        },
    ];

    const mobileMenu = (
        <Menu>
            {navList.map((item) => (
                <Menu.Item key={item.key} onClick={item.onClick}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Layout className="navbar">
            <Layout.Header className="nav-header">
                <div className="navbar-sections">
                    <div className="navbar-section">
                        <img src="/icon.svg" className="navbar-logo" />
                    </div>

                    {!mobileSize ? (
                        <div className="navbar-section-mid">
                            <Menu
                                className="nav-menu"
                                theme="dark"
                                mode="horizontal"
                                items={navList}
                            />
                        </div>
                    ) : (
                        <div className="navbar-section-mid">
                            <Dropdown overlay={mobileMenu} trigger={['click']}>
                                <Button icon={<MenuUnfoldOutlined />} className="navbar-dropdown-button" />
                            </Dropdown>
                        </div>
                    )}
                    <Menu
                        className="nav-menu"
                        theme="dark"
                        mode="horizontal"
                        items={[{
                            key: "Logout",
                            label: "Logout",
                            style: { fontSize: 15 },
                            onClick: () => {
                                setToken("");
                                navigate("/");
                            },
                        }]}
                    />
                </div>
            </Layout.Header>
        </Layout>
    );
};
export default NavBar;