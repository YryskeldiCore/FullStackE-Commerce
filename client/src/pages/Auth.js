import React, { useState, useContext } from 'react'
import { Container, Form, Card, Row, Button } from 'react-bootstrap'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { registration, login } from '../http/userAPI'
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import showNotification from '../components/Notification'

const Auth = observer(() => {

    const location = useLocation()
    const history = useHistory()
    const {user} = useContext(Context)
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const click = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }

            user.setUser(user)
            user.setAuth(true)
            if(data.role === 'ADMIN'){
                user.setAdmin(true)
            }
            history.push(SHOP_ROUTE)
        } catch (e) {
            showNotification(e.response.data.message, 'danger')
        }
    }

    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
            >
            <Card 
                style={{width: 600}}
                className="p-5"
                >
                <h2 className="m-auto">{isLogin ? 'Authorization': 'Registration'}</h2>
                <Form 
                    className="d-flex flex-column"
                    >
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email?"
                        className="mt-4"
                        />
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-4"
                        placeholder="Your Password?"
                        type="password"
                        />
                    <Row className='d-flex justify-content-between pl-3 pr-3 mt-3'>
                        {isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        <Button 
                            onClick={click}
                            variant={'outline-success'}
                            >
                            {isLogin ? 'Войти': 'Зарегистрироваться'}
                            </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
    