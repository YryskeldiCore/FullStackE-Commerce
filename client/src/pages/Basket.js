import React, {useContext, useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import { toJS } from 'mobx';
import {Container, Row} from 'react-bootstrap'
import BasketDevices from '../components/BasketDevices'

const Basket = observer(() => {

    const {device} = useContext(Context)
    const [basketItems, setBasketItem] = useState([])

    useEffect(() => {
        setBasketItem(toJS(device.basketDevices))
    }, [device.basketDevices])

    if(basketItems.length === 0){
        return (
            <Container className="mt-4 text-center">
                <h2>
                    Корзина пустая <i>😕</i>
                </h2>
                <p>
                    Вероятней всего, вы не заказывали ещё товары.
                    <br />
                    Для того, чтобы заказать товары, перейди на главную страницу AY-Store.
                </p>
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                <div className="mt-4">Ваш заказ:</div>
                {basketItems.map((item) => (
                    <BasketDevices key={item.id} device={item} deviceContext={device}/>
                ))}
            </Row>
        </Container>
    )
})

export default Basket
