const coin = {
    state: 0,

    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      this.state = Math.round(Math.random())
      return this.state
      
    },
  
    toString: function () {
      if(coin.state===0){
        return "Heads"
      }
      else if(coin.state===1){
        return "Tails"
      }
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      image.style.width="40px"

      if(coin.state===0){
        image.src = "images/heads.jpg"
        
      }
      else if(coin.state===1){
        image.src = "images/tails.jpg"
      }
      return image;
    },
  };


