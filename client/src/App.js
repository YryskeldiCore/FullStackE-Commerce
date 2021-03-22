import React, {useContext, useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import {observer}  from 'mobx-react-lite'
import {Context} from './index'
import {check} from './http/userAPI' 
import {Spinner} from 'react-bootstrap'

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check()
            .then(res => {
                user.setUser(true)
                user.setAuth(true)
                if(res.role === 'ADMIN'){
                    user.setAdmin(true)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if(loading) {
        return (
            <div style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh', 
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,.3)'}}>
                <Spinner 
                animation="border" 
                variant="primary" />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    )
})

export default App
