const key = "1b921a2274207f212886436fcf348587";

async function buscaCidade(cidade) {
    const dados = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    ).then(resposta => resposta.json());
    const temperatura = 5 / 9 * (dados.main.temp - 32); 
    // const temperatura = 5  9 * (68-32)
    
    document.querySelector(".cidade").innerHTML = 'Tempo em ' + dados.name

    document.querySelector('.temperatura').innerHTML = dados.main.temp.toFixed(0);

    document.querySelector('.descricao-tempo').innerHTML = dados.weather[0].description;
    
    document.querySelector('.umidade').innerHTML = 'umidade' + '' + dados.main.humidity + '%';
    
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;


    console.log(dados)
}



document.querySelector('#btn').addEventListener('click', () => {
    
    const cidade = document.querySelector(".input").value;

  

    buscaCidade(cidade)

})


