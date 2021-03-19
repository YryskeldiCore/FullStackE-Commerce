import React, {useContext, useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import { extendObservable, toJS } from 'mobx';
import DeviceItem from '../components/DeviceItem'


const Basket = observer(() => {
    const {device} = useContext(Context)
    const [basketItems, setBasketItem] = useState([])


    useEffect(() => {
        setBasketItem(toJS(device.basketDevices)) 
    }, [])

    if(basketItems.length === 0){
        return <div>В корзине пусто</div>
    }

    return (
        <div>
            {basketItems.map(item => (
                <DeviceItem key={item.id} device={item}/>
            ))}
        </div>
    )
})

export default Basket
