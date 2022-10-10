import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Noticia = ({noticia}) => {
    return (
        <Col  className="mt-4" sm={12} md={4} lg={3}>
            <Card>
                <Card.Body>
                <Card.Img>{noticia.image_url}</Card.Img>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text>
                    {noticia.description}
                </Card.Text>
                <Button>{noticia.link}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticia;