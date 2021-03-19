import React, {useContext, useState, useEffect} from 'react'
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap'
import {Context} from '../../index'
import {fetchTypes, fetchBrands, createDevice} from '../../http/deviceAPI.js'
import {observer} from 'mobx-react-lite'
import {validateDeviceInput} from '../Validateinput'

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)

    const [info, setInfo] = useState([])
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    useEffect(() => {
        fetchTypes()
             .then(res => {
                 device.setTypes(res)
             })
         fetchBrands()
             .then(res => {
                 device.setBrands(res)
             })
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const addDevice = () => {
        if(!name || !price || !file || !device.selectedBrand.id || !device.selectedType.id || !info){

            const errors = document.querySelectorAll('.error')

            for (let i = 0; i < errors.length; i++) {
                errors[i].remove()                
            }

            // eslint-disable-next-line default-case
            switch (true) {
                case !device.selectedType.id:
                    const deviceDrop = document.querySelector('.dropdown-device')
                    const text = document.createElement('div')
                    text.className = 'error'
                    text.textContent = 'Вы не выбрали тип'
                    deviceDrop.append(text)
                // eslint-disable-next-line no-fallthrough
                case !device.selectedBrand.id :
                    const brandDrop = document.querySelector('.dropdown-brand')
                    const text1 = document.createElement('div')
                    text1.className = 'error'
                    text1.textContent = 'Вы не выбрали brand'
                    brandDrop.append(text1)
            }

            validateDeviceInput(name, '.device-name', "You didn't enter the name")
            validateDeviceInput(price, '.device-price', "Please enter the cost of device!")
            if(!file){
                const fileInput = document.querySelector('.file-form')
                const fileText = document.createElement('div')
                fileText.textContent = 'Вы не выбрали файл'
                fileText.className = 'error'
                fileInput.insertAdjacentElement('afterend', fileText)
            }
            
            return 0
        } else {
            const formData = new FormData();
            formData.append('name', name)
            formData.append('price', `${price}`)
            formData.append('img', file)
            formData.append('brandId', device.selectedBrand.id)
            formData.append('typeId', device.selectedType.id)
            formData.append('info', JSON.stringify(info))
            createDevice(formData)
                .then(res => onHide()) 
        }
    }

    return (
        <Modal
            show={show}
            onHide = {onHide}
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3 mb-3 dropdown-device">
                        <Dropdown.Toggle>{device.selectedType.name || 'Choose your Type'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item 
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                    >
                                    {type.name}
                                    </Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3 mb-3 dropdown-brand">
                        <Dropdown.Toggle>{device.selectedBrand.name || 'Choose your Brand'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item 
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}>
                                    {brand.name}
                                    </Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3 mb-3 device-name"
                        placeholder="Enter name of Device"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    <Form.Control
                        className="mt-3 mb-3 device-price"
                        placeholder="Enter cost of Device"
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    <Form.Control
                        className="mt-3 mb-3 file-form"
                        type='file'
                        onChange={selectFile}
                        />
                    <hr/>
                    <Button
                        onClick={addInfo}
                        >Add new Properties
                    </Button>
                    {info.map(i => 
                        <Row key={i.number}>
                            <Col>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Enter name of property"
                                    className="mt-4"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Enter description of property"
                                    className="mt-4"
                                />
                            </Col>
                            <Col>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    className="mt-4"
                                    variant="outline-danger"
                                    >Delete</Button>
                            </Col>
                        </Row>    
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice
