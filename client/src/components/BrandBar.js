import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Row, Card} from 'react-bootstrap'
import {Context} from '../index'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="mt-4">
            {device.brands.map(brand => {
                return(
                    <Card
                        style={{width: '8rem', height: '2rem', border: '2px solid blue'}}
                        className="ml-2 text-center brandbar-hover"
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id? 'danger': 'light'}
                        >{brand.name}</Card>
                )
            })}
        </Row>
    )
})

export default BrandBar
