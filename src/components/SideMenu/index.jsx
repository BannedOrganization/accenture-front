import React, { useState } from 'react';
import {Drawer, Button, Menu, Card, Descriptions} from 'antd';
import {
    AppstoreAddOutlined,
    AppstoreOutlined, CarOutlined,
    FieldTimeOutlined,
    LogoutOutlined,
    MailOutlined, PieChartOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import Title from "antd/es/typography/Title";
import "./style.scss"
import {Link, NavLink, Redirect} from "react-router-dom";


const Logout = () => {
    return (
        <Card
            hoverable={true}
            bordered={true}
            className="logout"
        >
            <Title level={5}>Выйти</Title>
            <LogoutOutlined width="100" />
        </Card>
    )
}

const ProfileCard = () => {
    return (
        <div className="profile-info">
            <Avatar shape="square" size={64} src="https://19.img.avito.st/640x480/9830966519.jpg" />
            <div>
                <Title level={5}>Николай Сафронов</Title>
                <p>Администратор</p>
            </div>
        </div>
    )
}

const SideMenu = () => {
    const [visible, setVisible] = useState(true);


    const showSideMenu = () => {
        setVisible(true);
    };

    const closeSideMenu = () => {
        setVisible(false);
    };
    return (
        <div className="SideMenu">
            <ProfileCard />
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                className="menu"
            >
                <Menu.ItemGroup>
                    <Menu.Item
                        eventKey="1"
                        icon={<PieChartOutlined />}
                    >
                        <Link to="/analytics">
                            Аналитика
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        eventKey="2"
                        icon={<CarOutlined />}
                    >
                        <Link to="/delivery-schedule">
                            Поставки
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        eventKey="3"
                        icon={<AppstoreAddOutlined />}
                    >
                        <Link to="/tools">
                            Доп. инструменты
                        </Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu>
            <Logout />
        </div>
    );
};

export default SideMenu