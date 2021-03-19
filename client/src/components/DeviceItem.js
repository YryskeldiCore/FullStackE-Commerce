import React from 'react'
import {Card, Image, Col} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col md={3} className="mt-4" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card>
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
                <div>{device.name}</div>    
            </Card>
        </Col>
    )
}

export default DeviceItem
