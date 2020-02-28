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
  
  var player = null;
  var clickBoutonHaut = false;
  var clickBoutonBas = false;
  var cursor = null;
  var vKey;
  
  const game = new Phaser.Game(config);
  
  function preload(){
    this.load.image("joueur","player.png");
    this.load.image("joueur_cdp","player_kick.png");
    this.load.image("haut","haut.png");
    this.load.image("bas","bas.png");
  }
  
  function create(){
    var positionCameraCentreX = this.cameras.main.centerX;
    var positionCameraCentreY = this.cameras.main.centerY;
    player = this.add.sprite(positionCameraCentreX,positionCameraCentreY,"joueur");
  
    var down = this.add.sprite(50,50,"bas").setInteractive();
    var top = this.add.sprite(100,50,"haut").setInteractive();
  
    down.on("pointerdown",function(){
      clickBoutonBas = true;
    });
    down.on("pointerup",function(){
      clickBoutonBas = false;
    })
    down.on("pointerout",function(){
      clickBoutonBas = false;
    })
  
    top.on("pointerdown",function(){
      clickBoutonHaut = true;
    });
    top.on("pointerup",function(){
      clickBoutonHaut = false;
    })
    top.on("pointerout",function(){
      clickBoutonHaut = false;
    })
    
    cursor = this.input.keyboard.createCursorKeys();
  
    this.input.keyboard.on("keydown_B", function(){
      console.log("coucou");
    })
  
    vKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
  
  }
  
  function update(time, delta){
    // player.setAngle(player.angle + 1);
    if(clickBoutonHaut){
      player.setScale(player.scaleX + 0.1, player.scaleY + 0.1);
    }
    if(clickBoutonBas){
      player.setScale(player.scaleX - 0.1, player.scaleY - 0.1);
    }
    if(cursor.left.isDown){
      player.x = player.x - 5;
    } 
    if(cursor.right.isDown){
      player.x += 5;
    } 
    if(cursor.up.isDown){
      player.y -= 5;
    }
    if(cursor.down.isDown){
      player.y += 5;
    }
  
    if(vKey.isDown){
      console.log("v");
      player.setTexture("joueur_cdp");
    }
    if(vKey.isUp){
      player.setTexture("joueur");
    }
  }