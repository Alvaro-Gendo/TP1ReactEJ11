import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  return (
    <>
    <Form >
      <Form.Group >
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Form.Label>Buscar por categorias</Form.Label>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Select>
              <option>Selecciones una opcion</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </Form.Select>
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-3">
            <Form.Label>Buscar por pais</Form.Label>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Select className="mt-3">
              <option>Selecciones una opcion</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
    </Form>
    <ListaNoticias></ListaNoticias>
    </>
  );
};

export default Formulario;
