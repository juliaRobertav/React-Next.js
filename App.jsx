// styles / CSS
import './App.css'
// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
//imagem em assets
import Noite from './assets/noite_estrelada.jpg';

const imagem = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fvincent-van-gogh-arte-estilo-paisagem-rede-neural-arte-gerada_636705-8836.jpg%3Fw%3D2000&tbnid=giIWeN9FyRmDBM&vet=12ahUKEwjvuODd0-uBAxUBVjUKHW8hAEQQMygSegUIARCUAQ..i&imgrefurl=https%3A%2F%2Fbr.freepik.com%2Ffotos-premium%2Fvincent-van-gogh-arte-estilo-paisagem-rede-neural-arte-gerada_38640570.htm&docid=8rIH4u4KVoJM2M&w=2000&h=1125&q=van%20gogh&client=firefox-b-e&ved=2ahUKEwjvuODd0-uBAxUBVjUKHW8hAEQQMygSegUIARCUAQ"



function App() {
  return (
    <div className='App'>
        <h1>Fundamentos</h1>
        {/* exemplo imagem */}
        <img width={300} src={imagem} alt='imagem1'/>
        <FirstComponent />
        {/* imagem em public*/}
        <img width={200} src='/amendoeira.jpg' alt='amendoeira'/>
        <TemplateExpressions />
        {/* imagem em assets */}
        <img width={200} src={Noite} alt='noite'/>
    </div>
  );
}

export default App;
