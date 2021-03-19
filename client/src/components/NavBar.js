import React, { useContext} from 'react'
import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import { Context } from '../index'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {useHistory } from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
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
                    to={SHOP_ROUTE}
					>
                    AY-Store
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
                                >Личный кабинет</Button>}
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
                                </Button>
                        </Nav>
                        :
                        <Nav className='ml-auto'>
                            <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
            </div>
        </Navbar>
    )
})

export default NavBar
