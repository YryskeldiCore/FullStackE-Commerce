import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { createBrand } from '../../http/deviceAPI.js'
import {validate} from '../Validateinput'

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addBrand = () => {
        validate(value, createBrand, setValue, onHide)
    }

    return (
        <Modal
            show={show}
            onHide = {onHide}
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="input-validate"
                        placeholder="Enter you brand"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateBrand
