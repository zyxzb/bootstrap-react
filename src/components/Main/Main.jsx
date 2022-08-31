import React from 'react';
import './Main.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Main = () => {
    return (
        <main>
        <Container>
            <Row className='px-4 my-5'>
                <Col md={7}>
                    <Image
                        src='https://cdn.pixabay.com/photo/2022/07/31/07/52/northern-gannets-7355205_960_720.jpg'
                        fluid
                        rounded/>
                </Col>
                <Col
                    md={5}
                    className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className='mt-4'>Tagline</h1>
                    <p className='mt-4 mb-4 text-center'>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Quod sit vero tenetur suscipit non veritatis consequuntur
                        dolore doloremque ea quidem?</p>
                    <Button variant="outline-primary">Click Me!</Button>
                </Col>
            </Row>

            <Row>
                <Card body className="text-center bg-secondary text-white py-2">This is some text within a card body.</Card>
            </Row>

            <Row className="mt-5 d-flex flex-row justify-content-between ">
                <Col className='mb-4 d-flex justify-content-center'>
                    <Card
                        style={{
                        width: '18rem'
                    }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233_960_720.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-4 d-flex justify-content-center'>
                    <Card
                        style={{
                        width: '18rem'
                    }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.pixabay.com/photo/2019/08/28/09/04/cat-4436154_960_720.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-4 d-flex justify-content-center'>
                    <Card
                        style={{
                        width: '18rem'
                    }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-4 d-flex justify-content-center'>
                    <Card
                        style={{
                        width: '18rem'
                    }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233_960_720.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-4 d-flex justify-content-center'>
                    <Card
                        style={{
                        width: '18rem'
                    }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.pixabay.com/photo/2019/08/28/09/04/cat-4436154_960_720.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-4 d-flex justify-content-center'>
                    <Card
                        style={{
                        width: '18rem'
                    }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mb-4 d-flex justify-content-center'>
                    <Card
                        style={{
                        width: '18rem'
                    }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233_960_720.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </main>
    );
}

export default Main;
