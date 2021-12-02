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

<div className="stat">
<p>8 машин приехало из 10</p>
</div>



<div className="ProgressBar">прогресс бар календаря</div>
<div className="Calendar">
<p>Календарь</p>
</div>
<div className="BorderBottom_2"></div>


<div className="container_flex">

<div className="">
<p className="AvtoTxt">Автомобиль с госномером:</p>
<p className="AvtoNumber">А 225 УА</p>
<p className="AvtoTxt">Дата приезда: 21 Декабря, 2021</p>
</div>
<div className="">
<p className="AvtoMapTitle">Маршрут:</p>
<div className="StatusInfo">
<p className="AvtoMapCity">Краснодар - Ростов</p>
<p className="GoodSession ColorG">Успешно</p><p className="InfoSession">Узнать детали</p>
</div>
</div>

</div>

<div className="container_flex">

<div className="">
<p className="AvtoTxt">Автомобиль с госномером:</p>
<p className="AvtoNumber">А 225 УА</p>
<p className="AvtoTxt">Дата приезда: 21 Декабря, 2021</p>
</div>
<div className="">
<p className="AvtoMapTitle">Маршрут:</p>
<div className="StatusInfo">
<p className="AvtoMapCity">Краснодар - Ростов</p>
<p className="GoodSession ColorB">Отозван</p><p className="InfoSession">Узнать детали</p>
</div>
</div>

</div>


<div className="container_flex">

<div className="">
<p className="AvtoTxt">Автомобиль с госномером:</p>
<p className="AvtoNumber">А 225 УА</p>
<p className="AvtoTxt">Дата приезда: 21 Декабря, 2021</p>
</div>
<div className="">
<p className="AvtoMapTitle">Маршрут:</p>
<div className="StatusInfo">
<p className="AvtoMapCity">Краснодар - Ростов</p>
<p className="GoodSession ColorG">Успешно</p><p className="InfoSession">Узнать детали</p>
</div>
</div>

</div>








                </div>
            </div>
        </div>
    );
}

export default PageContainer
