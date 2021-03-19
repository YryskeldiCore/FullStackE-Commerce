import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { createType } from '../../http/deviceAPI.js'
import {validate} from '../Validateinput'

const CreateType = ({show, onHide}) => {

	const [value, setValue] = useState('')

    const addType = () => {
        validate(value, createType, setValue, onHide)
    }

    return (
        <Modal
            show={show}
            onHide = {onHide}
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="input-validate"
                        placeholder="Enter you type"
						value={value}
						onChange={(e) => setValue(e.target.value)
                        }
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType
