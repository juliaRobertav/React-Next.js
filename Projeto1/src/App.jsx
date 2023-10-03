// styles / CSS
import './App.css'
// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';


const imagem = "https://article-imgs.scribdassets.com/2u25vw00cg7o9aq4/images/file99BXVJYN.jpg"



function App() {
  return (
    <div className='App'>
        <h1>Fundamentos</h1>
        <img width={150} src={imagem}/>
        <FirstComponent />
        <TemplateExpressions />
    </div>
  );
}

export default App;
