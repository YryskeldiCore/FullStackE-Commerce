import React, { useContext } from 'react'
import {Card, Image, Col, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'
import star from '../assets/star.png'
import {Context} from '../index'
import showNotification from './Notification'

const DeviceItem = ({deviceItem}) => {
    const {device} = useContext(Context)
    const history = useHistory()

    const onAdd = (basketId) => {
        device.setBasketDevices(basketId)
        showNotification('Добавлено в корзину', 'success')
    }

    return (
        <Col md={3} className="mt-4" >
            <Card key={deviceItem.id} style={{width: 225, height: 550}} className="p-1">
                <Image src={process.env.REACT_APP_API_URL + deviceItem.img} style={{width: 200, height: 350}}/>
                <div className="d-flex justify-content-between mt-2">
                    <div>{deviceItem.brand}</div>
                    <div className="d-flex justify-content-between">
                        <div>
                            {deviceItem.rating}
                            <Image src={star} style={{width: 16, height: 16}}/>
                        </div>
                    </div>    
                </div>     
                <div>Model: {deviceItem.name}</div>
                <div>Price: {deviceItem.price} cом</div>
                <Button
                    className="mt-2"
                    variant={'outline-info'} 
                    onClick={() => history.push(DEVICE_ROUTE + '/' + deviceItem.id)}>
                    More info...</Button>    
                <Button 
                    className="mt-2" 
                    variant={'outline-success'}
                    onClick={() => onAdd(deviceItem.id)}>
                    Add to Basket
                    </Button>
            </Card>
        </Col>
    )
}

export default DeviceItem
