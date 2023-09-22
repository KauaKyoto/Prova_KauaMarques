import './App.css';
import Noticia from './components/noticia';
import Categorias from './categorias/categorias';

function App() {
  return (
    <div className="Container">
      <h1> Kyoto's Notice </h1>
      <br></br>
      <Noticia />
      <br></br>
      <h3> Categoria: </h3>
      <Categorias categoria="Notícia Escolar e Mídias Sociais"/>
    </div>
  );
}

export default App;
