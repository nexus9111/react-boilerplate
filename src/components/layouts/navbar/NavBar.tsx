import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useSetRecoilState } from "recoil";

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

    return (
        <Layout className="navbar">
            <Layout.Header className="nav-header">
                <div className="navbar-sections">
                    <div className="navbar-section">
                        <img src="/icon.svg" className="navbar-logo" />
                    </div>
                    <div className="navbar-section-mid">
                        <Menu
                            className="nav-menu"
                            theme="dark"
                            mode="horizontal"
                            items={navList}
                        />
                    </div>
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