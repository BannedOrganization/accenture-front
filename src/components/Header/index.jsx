import {Button, Dropdown, Menu, PageHeader, Tag} from 'antd';
import "./style.scss"
import {NavLink} from "react-router-dom";
import {EllipsisOutlined} from '@ant-design/icons';


const LogoIcon = ({src}) => (
    <NavLink to="/">
        <img className="example-link-icon" src="https://www.tadviser.ru/images/5/57/Acc_Logo_Black_Purple_RGB.png"/>
    </NavLink>
);

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
        <Button
            style={{
                border: 'none',
                padding: 0,
            }}
        >
            <EllipsisOutlined
                style={{
                    fontSize: 20,
                    verticalAlign: 'top',
                }}
            />
        </Button>
    </Dropdown>
);

const Header = () => {
    return (
        <PageHeader
            className="Header"
            title="Accenture"
            tags={<Tag color="blue">Мониторинг сырья</Tag>}
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
                </Button>,
                <DropdownMenu key="more"/>,
            ]}
            avatar={{src: "https://www.tadviser.ru/images/5/57/Acc_Logo_Black_Purple_RGB.png"}}
        />
    )
}

export default Header
