import React, {useContext, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI.js'
import Pages from '../components/Pages'


const Shop = observer(() => {
   const {device} = useContext(Context)

   useEffect(() => {
       fetchTypes()
            .then(res => {
                device.setTypes(res)
            })
        fetchBrands()
            .then(res => {
                device.setBrands(res)
            })
        fetchDevices(null, null, device.page, 4)
            .then(res => {
                device.setDevices(res.rows)
                device.setTotalCount(res.count)
            })
   }, [])

   useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 4)
            .then(res => {
                device.setDevices(res.rows)
                device.setTotalCount(res.count)
            })
   }, [device.page, device.selectedType, device.selectedBrand])


    return (
        <Container>
            <Row>
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={10}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
