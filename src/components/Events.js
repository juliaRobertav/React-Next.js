const Events = () => {
    
    const handleMyEvent = (e) => {  {/* e = eventos que irá acontecer */}
        console.log(e)
        console.log("Ativou o evento!")
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => {alert("Clicou")}}>Clique</button>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir >o<")
                    }
                }}
                >ok</button>
            </div>
            {renderSomething(true)}  {/*como quero que a função seja renderizada, coloca os parênteses*/}
            {renderSomething(false)}
        </div>
    )
}

export default Events;