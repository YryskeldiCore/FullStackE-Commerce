import React from 'react'
import BackgroundImg from '../assets/backImg.jpg'
import {Col, Image, Container, Row} from 'react-bootstrap'
import Img from '../assets/shop.jpg'
import Img2 from '../assets/shop2.jpg'
import Img3 from '../assets/shop3.jpg'

const MainPage = () => {
    return (
        <div style={{background: `url(${BackgroundImg}) center/cover no-repeat`, height: '1850px', paddingTop: 50}}>
            <Container>
                <h2 style={{color: '#fff'}} className="text-center">Добро пожаловать в AY-Store</h2>
                <Row className="mt-4">
                    <Col md={5}>
                        <Image src={Img} style={{width: '450px', height: '600px', border: '2px solid white'}}/>
                    </Col>
                    <Col md={7}>
                        <h3 style={{color: '#fff'}} >Здесь вы найдете то что нужно вам!</h3>
                        <p style={{color: '#fff', fontSize:'20px'}}>Наш магазин предложит вам самые лучшие условия и обеспечит гарантию на товар! Наши клиенты очень важны для нас и индивидуальный подход к каждому обеспечен! Также мы имеем хорошую репутация в сфере обслуживания так как мы занимаемся продажей и сервисом на протяжении 20 лет!</p>
                    </Col>
                </Row>
                <Row className="main-margin">
                    <Col md={7}>
                        <h3 style={{color: '#fff'}}>Лучшая электроника</h3>
                        <p style={{color: '#fff', fontSize:'20px'}}>Самые лучшие девайсы от различных брендов по приемлемым ценам и лучшими условиями покупки с возможностью рассрочки на длительный срок. Сравните товары других магазинов, сделайтe review! Найдете дешевле и лучше? Дадим по такой же цене!</p>
                    </Col>
                    <Col md={5}>
                        <Image src={Img2} style={{width: '550px', height: '400px'}}/>
                    </Col>
                </Row>
                <Row className="main-margin">
                    <Col md={7}>
                        <Image src={Img3} style={{width: '550px', height: '400px'}}/>
                    </Col>
                    <Col md={5}>
                        <h3 style={{color: '#fff'}} >Cервис</h3>
                        <p style={{color: '#fff', fontSize:'20px'}}>Наши мастера одни из самых квалифицированных специалистов страны готовы помочь вам с ремонтом и обслуживанием. Нашли дефект поменяем, починим абсолютно любые поломки, устраним так и hardware, так и software ошибки.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPage
