// import { GameBoard } from "./Components/GameBoard";
import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { Sections } from "./components/Sections";
import { Tips } from "./components/Tips";
import "./App.css";

function App() {

  return (
    <main id="main">
      <Welcome />
      <Header />
      <Sections>
        <Tips/>
      </Sections>
      <footer className="footer"></footer>
    </main>
  );
}

export default App;
