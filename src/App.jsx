import Titulo from "./components/Titulo"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="App mt-3">
      <Titulo></Titulo>
    </Container>
  );
}

export default App;
