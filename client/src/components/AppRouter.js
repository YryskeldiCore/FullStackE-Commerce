import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../Routes'
import { SHOP_ROUTE } from '../utils/consts'
import {Context} from '../index'
import '../assets/scss/style.scss'

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}

export default AppRouter
