//Sets up game and handles all Opponent functions
var Pixel = Pixel || {};

Pixel.GameState = {

  init: function() 
  {   
      //background
      this.add.image(0, 0, 'background');
      //Holds colour selectors
      this.colours = this.add.group();
      //Holds board buttons
      this.boardTiles = this.add.group();
      //Holds colour numbers
      this.colourNum = this.add.group();
      //Holds board numbers
      this.boardTileNum = this.add.group();
      //Holds the selected colour
      this.colour = null;
      //Holds the numbers for the board which will correspond to colours
      this.board= Pixel.currBoard;
      //Holds the number of areas in need of a correct fill
      //Once 0 game is over
      this.filled = this.board.length * this.board[0].length;
  },
  create: function()
  {
      this.createColours();
      this.createBoard();
  },
  createColours: function()
  {
      //Using a bitmap alpha mask display all the colours as 'blots'
      var colourAssets = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'grey', 'brown', 'black'];
      
      for(var i=0; i<colourAssets.length; i++)
      {
          var bmd = this.make.bitmapData(75, 75);
          bmd.alphaMask(colourAssets[i], 'colourMask');
          
          var num1 = this.add.text(800, (20 + (40 * i)), (i+1));
          num1.colour = colourAssets[i];
          num1.text = (i+1);
          num1.scale.setTo(0.5, 0.5);
          num1.anchor.setTo(0.5, 0.5);
          this.colourNum.add(num1);
          
          var b1 = this.add.button(800, (0 + (40 * i)), bmd, function(button)
          {
             this.colour =  button;
          }, this);
          b1.text = num1;
          b1.scale.setTo(0.5, 0.5);
          this.colours.add(b1);
      }
  },
  createBoard: function()
  {
      //Create the grid with empty tiles and numbers corresponding to the colour that fills it
      for(var i=0; i<this.board.length; i++)
      {
          for(var j=0; j<this.board[i].length; j++)
          {
              var num1 = this.add.text((0 + (38 * i)), (0 + (38 * j)), this.board[i][j]);
              num1.num = this.board[i][j];
              this.boardTileNum.add(num1);
              
              var t1 = this.add.button((0 + (38 * i)), (0 + (38 * j)), 'tile', function(button)
              {
                  if(this.colour != null)
                  {
                      button.loadTexture(this.colour.text.colour);
                      if(button.num.num == this.colour.text.text)
                      {
                          this.boardTileNum.remove(button.num);
                          button.inputEnabled = false;
                          //Keep track of how many tiles are corretly filled
                          this.filled--;
                          if(this.filled == 0)
                          {
                              this.endGame();
                          }
                      }
                      //If a dark colour is used and the black number cannot be seen make the colour white
                      else if(this.colour.text.colour == 'black' || this.colour.text.colour == 'brown' || this.colour.text.colour == 'grey')
                      {
                          //Change text to white
                          button.num.fill = '#FFFFFF';
                      }
                      else
                      {
                          //make text black
                          button.num.fill = '#000000';
                      }
                  }
              }, this);
              t1.scale.setTo(0.5, 0.5);
              t1.num = num1;
              this.boardTiles.add(t1);           
          }
      }
  },
  endGame: function()
  {
      var arr = [];
      var count = 0;
      var list = "[";
      this.colours.forEach(function(color)
      {
          list=list+count+", ";
          arr[count] = color.key;
          count++;
      }, this);init()
      list=list+count+"]";
      //Launch the coupon
      this.coupon = this.add.sprite(40, 400, 'coupon');
      this.coupon.anchor.setTo(0.5, 0.5);
      this.coupon.scale.setTo(0.5, 0.5);
      this.coupon.alpha = 0;
      this.add.tween(this.coupon).to( { alpha: 1, x: 480, y: 200}, 2000, Phaser.Easing.Linear.None, true);
      this.tween = this.add.tween(this.coupon.scale).to( { x: 1, y: 1}, 2000, Phaser.Easing.Linear.None, true);
              
      this.tween.onComplete.add(function()
      {
        this.emitter = this.add.emitter((this.coupon.x - (this.coupon.texture.width/2)), (this.coupon.y - (this.coupon.texture.height/2)), 2000);
        this.emitter.makeParticles(arr, list);
        this.emitter.minParticleScale = 0.3;
        this.emitter.maxParticleScale = 0.3;
        this.emitter.start(false, 5000, 5);
                  
        this.emitter2 = this.add.emitter(((this.coupon.x - (this.coupon.texture.width/2)+ this.coupon.texture.width)), (this.coupon.y - (this.coupon.texture.height/2)), 2000);
        this.emitter2.makeParticles(arr, list);
        this.emitter2.minParticleScale = 0.3;
        this.emitter2.maxParticleScale = 0.3;
        this.emitter2.start(false, 5000, 5);
      }, this);
  }
};