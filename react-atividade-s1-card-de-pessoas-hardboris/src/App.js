// import logo from "./logo.svg";
import "./App.css";
import Developer from "./components/Developer";

function App() {
  const developers = {
    gabriel: "Gabriel",
    felipe: "Felipe",
    mariana: "Mariana",
  };
  const idades = {
    gabriel: 19,
    felipe: 28,
    mariana: 24,
  };
  const paises = {
    gabriel: "Brasil",
    felipe: "Brasil",
    mariana: "Italia",
  };
  return (
    <div className="App">
      <header className="App-header">
        <Developer
          name={developers.gabriel}
          age={idades.gabriel}
          country={paises.gabriel}
        />
        <Developer
          name={developers.felipe}
          age={idades.felipe}
          country={paises.felipe}
        />
        <Developer
          name={developers.mariana}
          age={idades.mariana}
          country={paises.mariana}
        />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
