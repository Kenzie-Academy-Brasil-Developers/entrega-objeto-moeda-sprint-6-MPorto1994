const coin = {
    state: 0,

    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      this.state = Math.round(Math.random())
      return Math.round(Math.random())
      
    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
      if(coin.flip===0){
        return "Heads"
      }
      else if(coin.flip===1){
        return "Tails"
      }
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      
      
      if(coin.flip===0){
        image.src = "images/heads.png"
      }
      else if(coin.flip===1){
        image.src = "images/tails.png"
      }
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      return image;
    },
  };


