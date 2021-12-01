import 'antd/dist/antd.css';
import './App.scss';
import React, {useState} from "react";
import PageContainer from "./components/PageContainer";
import {Redirect, Route} from "react-router-dom";
import {Switch} from "antd";
import AdminPage from "./pages/Admin";
import StaffPage from "./pages/Staff";

const App = () => {
    //admin and staff
    const [userRole, setUserRole] = useState("admin")

  return (
    <div className="App">
        <PageContainer>
            <Switch>
                <Route path="/">
                    {userRole === "admin" ? <AdminPage /> : <StaffPage/>}
                </Route>
                <Route path="/posts" component="" exact/>
                <Route component=""/>
            </Switch>
        </PageContainer>
    </div>
  );
}

export default App;
