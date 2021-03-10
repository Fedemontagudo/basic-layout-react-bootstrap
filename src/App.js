
import { Container, Col, Row } from "react-bootstrap";


function App() {
  return (
    <>
      <Container fluid="md" className="d-flex flex-column contenedor " >
        <Row as="header" className="d-flex align-item-center text-white">
          <Col as="h1" className="titulo">Título</Col>
        </Row>

        <Row as="main">
          <Col as="article" lg={8} md={8} sm={12} xs={12} className="pb-5">
            <h2 className="titular">Titular de la noticia</h2>
            <p className="textos">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quidem voluptatem voluptatibus corrupti, cum quam aliquid
              explicabo omnis iusto consectetur, nihil aspernatur,
              nisi ipsam quae cumque commodi nemo! Nihil, iure error!
            </p>
            <p className="textos">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quidem voluptatem voluptatibus corrupti, cum quam aliquid
              explicabo omnis iusto consectetur, nihil aspernatur,
              nisi ipsam quae cumque commodi nemo! Nihil, iure error!
          </p>
          </Col>

          <Col as="aside" lg={4} md={4} sm={12} xs={12} className="pb-5" >
            <h3 className="titular">Categorías</h3>
            <ul>
              <li>Noticias de deporte</li>
              <li>Noticias de ocio</li>
              <li>Noticias de política</li>
              <li>Noticias de espectáculos</li>
            </ul>
            <h3 className="titular">Otras cosas</h3>
            <ul>
              <li>Nosequé</li>
              <li>Nosecuanto</li>
              <li>Talycual</li>
            </ul>
          </Col>
        </Row>
        <Row as="footer" sm={12} className="justify-content-center aling-item-center text-white pt-4">
          <Col as="p" className="text-center texto-footer">Texto del footer</Col>
        </Row>
      </Container >
    </>

  );
}

export default App;
