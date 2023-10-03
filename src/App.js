// styles / CSS
import './App.css'
// components
import FirstComponent from './components/FirstComponent/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';


const imagem = "https://article-imgs.scribdassets.com/2u25vw00cg7o9aq4/images/file99BXVJYN.jpg"

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
        <img width={150} src={imagem}/>
        <FirstComponent/>
        <TemplateExpressions/>
        <Events/>
    </div>
  );
}

export default App;
