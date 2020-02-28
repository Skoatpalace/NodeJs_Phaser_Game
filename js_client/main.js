var config = {
    type : Phaser.AUTO,
    width : 800,
    height : 600,
    scene : {
      preload : preload,
      create : create,
      update : update
    }
  }
  
  const game = new Phaser.Game(config);
  
  function preload(){
      this.load.image("joueur", "player.png");
  }
  
  function create(){
      var positionCameraCentreX = this.cameras.main.centerX;
      var positionCameraCentreY = this.cameras.main.centerY;
      this.add.sprite(positionCameraCentreX, positionCameraCentreY, "joueur");
  }
  
  function update(time, delta){
  }