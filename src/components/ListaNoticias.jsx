import React from "react";
import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = (props) => {
  return (
    <Row>
      {props.noticia.map((noticia, posicion) => (
        <Noticia key={posicion}
        noticia={noticia}/>
        ))}
    </Row>
  );
};

export default ListaNoticias;
