import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    consultarAPI();
  });

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_12149c5ee2beaf5dc3ab74537f03b7c7a610b&category=${categoria}&country=${pais}`
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato);
      setNotcia(dato[0]);
    } catch (error) {
      console.log(error);
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
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="environment">environment</option>
                <option value="food">food</option>
                <option value="health">health</option>
                <option value="politics">politics</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
                <option value="top">top</option>
                <option value="world">world</option>
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
          <Button type="submit" onClick={consultarAPI} className="mt-3">
            Buscar
          </Button>
        </Form.Group>
      </Form>
      <ListaNoticias noticia={noticia}></ListaNoticias>
    </>
  );
};

export default Formulario;
