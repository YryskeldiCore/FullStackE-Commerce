import React, {useState, useEffect, useContext} from 'react'
import { Container, Row, Image, Col, Card, Button } from 'react-bootstrap'
import bigstar from '../assets/bigstar.png'
import {useParams} from 'react-router-dom'
import { fetchOneDevice} from '../http/deviceAPI'
import { observer } from 'mobx-react-lite'
import {Context} from '../index'
import showNotification from '../components/Notification'

const DeviceShop = observer(() => {
    const {device} = useContext(Context)

    const [deviceInfo, setDeviceInfo] = useState({info:[]})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id)
            .then(res => {
                setDeviceInfo(res)
            })
    }, [])

    const onAdd = (basketId) => {
        device.setBasketDevices(basketId)
        showNotification('Добавлено в корзину', 'success')
    }
    
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col md={4}>
                    <Image 
                        style={{width: 250, height: 500}}
                        src={process.env.REACT_APP_API_URL + deviceInfo.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{deviceInfo.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background:`url(${bigstar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                            >
                            {deviceInfo.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card 
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid blue'}}
                        >
                        <h3>От: {deviceInfo.price} сомов</h3>
                        <Button 
                            variant={'outline-success'}
                            onClick={() => onAdd(deviceInfo.id)}>
                            Add to Basket
                            </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h1>Characteristics</h1>
                {deviceInfo.info.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0? 'gold': 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                    )}
            </Row>
        </Container>
    )
})

export default DeviceShop
