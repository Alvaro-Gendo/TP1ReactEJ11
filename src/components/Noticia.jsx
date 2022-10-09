import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Noticia = () => {
    return (
        <Col  className="mt-4" sm={12} md={4} lg={3}>
            <Card>
                <Card.Body>
                <Card.Img></Card.Img>
                <Card.Title>Noticia Tilulo</Card.Title>
                <Card.Text>
                    Noticia parrafo
                </Card.Text>
                <Button>Mas info</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticia;