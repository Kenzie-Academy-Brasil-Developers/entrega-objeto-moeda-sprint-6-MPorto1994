
let topScript = document.querySelectorAll("script")[0]


function display20Flips() {
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  
  
  
  let results = [];
  let divFlips = document.createElement("div")
  document.body.appendChild(divFlips)
  
  for (let i=0 ; i<=20 ; i++){
    coin.flip()
    results.push(coin.toString())
  }
  let resultsString = document.createTextNode(results)
  divFlips.appendChild(resultsString)
  return results
}
display20Flips()


function display20Images() {
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.




  let results = [];
  let divFlips = document.createElement("div")
  document.body.appendChild(divFlips)
  for (let i=0 ; i<=20 ; i++){
    coin.flip()
    // console.log(coin.toHtml)
    // results.push(coin.toString())
    divFlips.appendChild(coin.toHTML())
  }
  let resultsString = document.createTextNode(results)
  divFlips.appendChild(resultsString)
  return results
}
display20Images()

