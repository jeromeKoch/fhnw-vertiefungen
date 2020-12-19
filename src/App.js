import { Container } from "@material-ui/core"
import Header from "./components/Header/Header.js"
import Module from "./components/Module/Module.js"

const modules = ["OOP", "ALGD2", "EIPR"]

function App() {
  return (
    <Container maxWidth="sm">
      <Header />
      <br/>
      <br/>
      <br/>
      {modules.map((mod, i) => (
        <Module mName={mod} mId={i} />
      ))}
    </Container>
  );
}

export default App;
