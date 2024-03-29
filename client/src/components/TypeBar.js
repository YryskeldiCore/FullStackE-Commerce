import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {ListGroup} from 'react-bootstrap'

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup className="mt-4">
            {device.types.map(type => {
                return(
                    <ListGroup.Item 
                        className="typebar-hover"
                        style={{cursor: 'pointer'}}
                        active={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                        key={type.id}
                        >
                        {type.name}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
})

export default TypeBar

