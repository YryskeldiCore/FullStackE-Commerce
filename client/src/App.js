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
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    )
})

export default App
