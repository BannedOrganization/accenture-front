import React, { useState } from 'react';
import {Drawer, Button, Menu} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import Title from "antd/es/typography/Title";
import "./style.scss"

const Index = () => {
    const [visible, setVisible] = useState(true);


    const showSideMenu = () => {
        setVisible(true);
    };

    const closeSideMenu = () => {
        setVisible(false);
    };
    return (
        <div className="SideMenu">
            <div className="profile-info">
                <Avatar shape="square" size={64} icon={<UserOutlined />} />
                <div className="profile-info">
                    <Title level={4}>Николай Сафронов</Title>
                    <Title level={5}>Администратор погрузки</Title>
                </div>
            </div>
            <Menu

                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="menu"
            >
                <Menu.ItemGroup>
                    <Menu.Item icon={<AppstoreOutlined />}>Option 1</Menu.Item>
                    <Menu.Item icon={<SettingOutlined />}>Option 2</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        </div>
    );
};

export default  Index