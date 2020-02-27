var characters = ["Player One", "Player Two"];

function match() {
  var that = this;
  this.players = [];
  this.checkWinner = true;
  this.winnerMessage = document.createElement("div");
  this.buttonEle = document.createElement("button");
  this.buttonEle.innerHTML = "Reset";

  for (var i = 0; i < characters.length; i++) {
    this.players.push(new character(characters[i], that));
  }

  document.body.appendChild(this.winnerMessage);

  
document.body.appendChild(this.buttonEle);
  
  if (this.checkWinner == true) {
    this.buttonEle.style.display = "none";
  }


  this.buttonEle.addEventListener("click", function() {
    window.location.reload(true);
  });
}

function character(ply, parent, buttonEle) {
  var that = this;
  this.ply = ply;
  this.nbm = 0;

  this.characterEle = document.createElement("div");
  this.plyEle = document.createElement("div");
  this.nbmEle = document.createElement("div");

  this.plyEle.innerHTML = this.ply;
  this.nbmEle.innerHTML = "Score:" + this.nbm;

  this.characterEle.appendChild(this.plyEle);
  this.characterEle.appendChild(this.nbmEle);

  this.characterEle.addEventListener("click", function() {
    if (parent.checkWinner) {
      that.nbm = that.nbm + 1;
      that.nbmEle.innerHTML = "Score: " + that.nbm;
      if (that.nbm == 5) {
        parent.winnerMessage.innerHTML = "The winner is " + that.ply+"!";
        parent.checkWinner = false;
        parent.buttonEle.style.display = "inline"
         if (parent.checkWinner = false){
           
         }
        
      }
    }
  });

  document.body.appendChild(this.characterEle);
}

var match1 = new match();