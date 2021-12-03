import 'antd/dist/antd.css';
import './style.scss';
import React from "react";
import SideMenu from "../SideMenu";
import Header from "../Header";

const PageContainer = ({children}) => {
    return (
        <div className="PageContainer">
            <Header/>
            <div className="content">
                <SideMenu/>
                <div className="children">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageContainer
