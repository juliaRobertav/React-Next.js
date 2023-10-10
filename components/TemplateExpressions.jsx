const TemplateExpressions = () => {
    const nome = "Julia"
    const data = {
        idade: 18,
        profissao: "backend developer"
    };

    return(
        <div>
            <h3>Olá, {nome}, tudo bem?</h3>
            <h3>Sua idade: {data.idade}</h3>
            <h3>Você atua como: {data.profissao}</h3>
            {/* <h2>{20 / 2}</h2> */}
            {/* <p>{alert("Eu sou um alerta")}</p> */}
        </div>
    )
}


export default TemplateExpressions;