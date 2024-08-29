// import { GameBoard } from "./Components/GameBoard";
import { Header } from "./Components/Header";
import { Welcome } from "./Components/Welcome";
import { Sections } from "./Components/Sections";
import "./App.css";

function App() {

  return (
    <main id="main">
      <Welcome />
      <Header />
      <Sections />
      <footer className="footer"></footer>
    </main>
  );
}

export default App;
