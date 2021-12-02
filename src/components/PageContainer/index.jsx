import 'antd/dist/antd.css';
import './style.scss';
import React from "react";
import SideMenu from "../SideMenu";
import Header from "../Header";

const PageContainer = ({ children }) => {
    return (
        <div className="PageContainer">
            <Header/>
            <div className="content">
                <SideMenu />
                <div className="children">
                    { children }
<div>
<p>8 машин приехало из 10</p>
</div>

<div className="ProgressBar">линия</div>
<div className="Calendar">
<p>21 Декабря, Понедельник</p>
<div>
<p></p>


</div>



</div>

                </div>
            </div>
        </div>
    );
}

export default PageContainer
