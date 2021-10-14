
let topScript = document.querySelectorAll("script")[0]

function display20Flips() {
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  
  
  
  let results = [];
  // let divFlips = document.createElement("div")
  // document.body.insertBefore(divFlips,topScript)
  
  for (let i=0 ; i<=20 ; i++){
    results.push(coin.toString())
  }
  let resultsString = document.createTextNode(results)
  divFlips.appendChild(resultsString)
  return results
}
display20Flips()


function display20Images() {
  let results = [];
  let divFlips = document.createElement("div")
  document.body.insertBefore(divFlips,topScript)
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  for (let i=0 ; i<=20 ; i++){
    results.push(coin.toString())
    divFlips.appendChild(coin.toHtml())
  }
  let resultsString = document.createTextNode(results)
  divFlips.appendChild(resultsString)
  return results
}
// display20Images()

