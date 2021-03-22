import React from 'react'
import { DEVICE_ROUTE } from '../utils/consts'
import {Card, Image, Col, Button} from 'react-bootstrap'
import star from '../assets/star.png'
import {useHistory} from 'react-router-dom'
import showNotification from './Notification'

const BasketDevices = ({device, deviceContext}) => {
    const history = useHistory()

    const removeDevice = (id) => {
        deviceContext.removeBasketDevices(id)
        showNotification('Товар удален', 'danger')
    }

    return (
        <>
            <Col md={3} className="mt-4">
                <Card 
                    className="p-3"
                    key={device.id}>
                    <Button
                        сlassName="btn"
                        style={{width: 40, height: 40, marginLeft: 'auto'}}
                        variant={'outline-danger'}
                        onClick={() => removeDevice(device.id)}>
                        X</Button>
                    <Image src={process.env.REACT_APP_API_URL + device.img} style={{width: 180, height: 350}}/>
                    <div className="d-flex justify-content-between mt-2">
                        <div>{device.brand}</div>
                        <div className="d-flex justify-content-between">
                            <div>
                                {device.rating}
                                <Image src={star} style={{width: 16, height: 16}}/>
                            </div>
                        </div>    
                    </div>     
                    <div>Model: {device.name}</div>    
                    <div>Count: {device.quantity}</div>
                    <div>Price: {device.price}</div>
                    <Button 
                        className="mt-2"
                        variant={'outline-info'}
                        onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                        More info...</Button>
                </Card>
            </Col>
        </>
    )    
}

export default BasketDevices

