import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Middle-part.module.scss'

const MiddlePart = () => {
    return (
        <div className={styles.middlePartSection}>
            <Container fluid>
                <Row>
                    <Col md={6} className={styles.textSection}>
                        <div>
                            <h2>Ваша особлива мить стилю і спокуси!</h2>
                            <p>
                                Наша білизна виражає вашу унікальну особистість
                                та стиль. Ви зможете вибрати серед різноманіття
                                - від романтичної до сміливої, від класичної до
                                модної. Наша колекція задовільнить навіть
                                найвибагливіших клієнтів і дозволить вам
                                відчувати себе впевнено і прекрасно у будь-якій
                                ситуації.
                            </p>
                            <a href="#" className={styles.catalogLink}>
                                До каталогу
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img
                            className={styles.imageSection}
                            src={require('../../assets/main/karlozi.jpg')}
                            alt="Karlozi"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MiddlePart
