import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Row} from 'react-bootstrap'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="mt-5">
            {device.devices.map(device => {
                return (
                    <DeviceItem key={device.id} device={device}/>
                )
            })}
        </Row>
    )
})

export default DeviceList
