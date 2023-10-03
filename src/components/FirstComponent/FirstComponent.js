//components
import MyComponent from "../MyComponent";
import './FirstComponent.css'

const FirstComponent = () => {

    return ( 
        <div className="First">
            <h2>Meu primeiro componente</h2>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;