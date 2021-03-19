import {$host, $authHost} from './index'
import jwt_decode from 'jwt-decode'
import showNotification from '../components/Notification'

export const registration = async (email, password) => {
    const {data} = await 
        $host.post('api/user/registration', {email, password})
            .then((data) => {
                showNotification('Вы успешно зарегистрировались', 'success')
                return data
            })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await 
    $host.post('api/user/login', {email, password})
        .then((data) => {
            showNotification('Вы успешно авторизовались', 'success')
            return data
        })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}