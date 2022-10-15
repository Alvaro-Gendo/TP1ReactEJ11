import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';

const Noticia = ({noticia}) => {
    return (
        <Col  className="mt-4" sm={12} md={4} lg={3}>
            <Card>
                <Card.Img>{}</Card.Img>
                <Card.Body>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text>{noticia.author}</Card.Text>
                <Card.Text>
                    {noticia.description}
                </Card.Text>
                <a href={noticia.url}>
                <Button className='btn btn-primary'>Ver mas</Button>
                </a>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticia;