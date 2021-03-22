import React, { useContext} from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import { Context } from '../index'
import { ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, PERSONAL_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {useHistory } from 'react-router-dom'

const NavBar = observer(() => {
    const {user, device} = useContext(Context)
    const history = useHistory()

    const logOutInServer = () => {
        user.setUser({})
        user.setAuth(false)
        user.setAdmin(false)
    }

    const logOutFromAll = () => {
        logOutInServer()
        history.push(SHOP_ROUTE)
    }

    return (
        <Navbar bg="primary" variant="dark">
            <div className="nav-container">
                <NavLink 
                style={{color: '#fff'}} 
                to={MAINPAGE_ROUTE}
                >
                AY-Store
                </NavLink>
                <NavLink 
                className="ml-4"
                style={{color: '#fff'}} 
                to={SHOP_ROUTE}
                >
                Shop
                </NavLink>
                <NavLink 
                className="ml-4"
                style={{color: '#fff'}} 
                to={ABOUT_ROUTE}
                >
                About
                </NavLink>
                    {user.isAuth ?
                        <Nav className='ml-auto'>
                            {user.isAdmin ?
                                <Button 
                                variant={'outline-light'} 
                                onClick={() => history.push(ADMIN_ROUTE)}
                                >АдминПанель</Button>
                                :
                                <Button 
                                variant={'outline-light'}
                                onClick={() => history.push(PERSONAL_ROUTE)} 
                                >Личный кабинет</Button>
                            }
                                <Button 
                                    variant={'outline-light'} 
                                    onClick={() => logOutFromAll()} 
                                    className='ml-2'
                                    >Выйти</Button>
                                <Button 
                                    variant={'outline-light'} 
                                    className='ml-2'
                                    onClick={() => history.push(BASKET_ROUTE)}>
                                    Basket
                                    <div>{device.sum}</div>
                                </Button>
                        </Nav>
                        :
                        <Nav className='ml-auto'>
                            <Button 
                                className="mr-3"
                                variant={'outline-light'} 
                                onClick={() => history.push(LOGIN_ROUTE)}>
                                Авторизация</Button>
                            <Button 
                                variant={'outline-light'} 
                                onClick={() => history.push(REGISTRATION_ROUTE)}>
                                Регистрация</Button>
                            <Button 
                                variant={'outline-light'} 
                                className='ml-2'
                                onClick={() => history.push(BASKET_ROUTE)}>
                                Basket
                                <div>{device.sum}</div>
                            </Button>
                        </Nav>
                    }
            </div>
        </Navbar>
    )
})

export default NavBar
