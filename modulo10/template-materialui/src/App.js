import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/login";
import './App.css'; // Importa o arquivo CSS

function App() {
  return (
    <div className="App">
      <div className="login-container">
        <Login />
      </div>
    </div>
  );
}

export default App;