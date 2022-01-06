import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from '../pages/loginPage/LoginPage'
import HomePage from '../pages/homePage/HomePage'
import MyVehicles from '../pages/myVehicles/MyVehicles'
import AllVehicles from '../pages/allVehicles/AllVehicles'
import Employees from '../pages/employees/Employees'
import GlobalState from '../global/GlobalState'


const Routers = () => {

    return (
        <BrowserRouter>
            <GlobalState>
            <Switch>
                
                <Route exact path ="/">
                    <LoginPage />
                </Route>

                <Route exact path="/home">
                    <HomePage />
                </Route>

                <Route exact path="/myVehicles">
                    <MyVehicles />
                </Route>

                <Route exact path="/allVehicles">
                    <AllVehicles />
                </Route>

                <Route exact path="/employees">
                    <Employees />
                </Route>

            </Switch>
            </GlobalState>
        </BrowserRouter>
    )
}

export default Routers