import React, {useState, useEffect} from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'
import {check} from '../http/userAPI' 
import {observer}  from 'mobx-react-lite'
import { useHistory } from 'react-router'
import { SHOP_ROUTE } from '../utils/consts'

const Admin = observer(() => {
   const history = useHistory()

   useEffect(() => {
      check()
          .then(res => {
              if(res.role === 'USER'){
                 history.push(SHOP_ROUTE)
              }
          })
   }, [])

   const [typeVisible, setTypeVisible] = useState(false)
   const [brandVisible, setBrandVisible] = useState(false)
   const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
             <h2 className="mt-4 text-center">Административная панель</h2>
             <Button 
                className="mt-4 p-3"
                onClick={() => setTypeVisible(true)}
                >Add Type</Button>
             <Button 
                className="mt-4 p-3"
                onClick={() => setBrandVisible(true)}
                >Add Brand</Button>
             <Button 
                className="mt-4 p-3"
                onClick={() => setDeviceVisible(true)}
                >Add Device</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    )
})

export default Admin
