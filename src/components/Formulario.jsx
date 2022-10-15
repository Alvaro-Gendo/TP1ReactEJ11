import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticia, setNotcia] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoria.trim() === "" && pais.trim() === "") {
      alert("seleccione las opciones");
    } else {
      consultarAPI();
    }
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=09bdaa070d3748c09e1d974428938c75`);
        
      const dato = await respuesta.json();
      setNotcia(dato.articles);
        // console.log(dato.articles)
    } catch (error) {
      alert("Complete los campos");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <Form.Label>Buscar por categorias</Form.Label>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Form.Select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                <option>Selecciones una opcion</option>
                <option value="business">Negocio</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="general">General</option>
                <option value="health">Vida</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnologia</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6} lg={6} className="mt-3">
              <Form.Label>Buscar por pais</Form.Label>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Form.Select
                className="mt-3"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                required
              >
                <option>Selecciones una opcion</option>
                <option value="ar">Argentina</option>
                <option value="au">Australia</option>
                <option value="mx">Mexico</option>
                <option value="ru">Rusia</option>
                <option value="jp">Japan</option>
              </Form.Select>
            </Col>
          </Row>
          <Button type="submit" className="mt-3">
            Buscar
          </Button>
        </Form.Group>
      </Form>
      <ListaNoticias noticia={noticia}></ListaNoticias>
    </>
  );
};

export default Formulario;
