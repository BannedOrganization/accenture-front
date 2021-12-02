import 'antd/dist/antd.css';
import './App.scss';
import React, {useState} from "react";
import PageContainer from "./components/PageContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import DeliverySchedule from "./pages/deliverySchedule";
import Analytics from "./pages/analytics";
import Tools from "./pages/instruments";

const App = () => {

  return (
    <div className="App">
        <PageContainer>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/analytics" />
                </Route>
                <Route path="/delivery-schedule" component={DeliverySchedule}/>
                <Route path="/analytics" component={Analytics}/>
                <Route path="/tools" component={Tools}/>
                <Route component=""/>
            </Switch>
        </PageContainer>
    </div>
  );
}

export default App;
