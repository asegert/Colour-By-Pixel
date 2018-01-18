var Pixel = Pixel || {};

//loading the game assets
Pixel.PreloadState = {
  preload: function() {
    //show loading screen
    /*this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(100, 1);
    this.load.setPreloadSprite(this.preloadBar);*/

    //images
    this.load.image('backgroundMain', 'assets/images/mainBackground.png');
    this.load.image('background', 'assets/images/background.png');
    this.load.image('start', 'assets/images/start_button.png');
    this.load.image('tile', 'assets/images/tile.png');
      
    this.load.image('heart', 'assets/images/heart.png');
    this.load.image('dog', 'assets/images/dog.png');
    this.load.image('rainbow', 'assets/images/rainbow.png');
    this.load.image('flowers', 'assets/images/flowers.png');
    this.load.image('house', 'assets/images/house.png');
      
    this.load.image('red', 'assets/images/red.png');
    this.load.image('orange', 'assets/images/orange.png');
    this.load.image('yellow', 'assets/images/yellow.png');
    this.load.image('green', 'assets/images/green.png');
    this.load.image('blue', 'assets/images/blue.png');
    this.load.image('purple', 'assets/images/purple.png');
    this.load.image('pink', 'assets/images/pink.png');
    this.load.image('white', 'assets/images/white.png');
    this.load.image('grey', 'assets/images/grey.png');
    this.load.image('brown', 'assets/images/brown.png');
    this.load.image('black', 'assets/images/black.png');
    this.load.image('colourMask', 'assets/images/colorMask.png');
      
    this.load.image('coupon', 'assets/images/coupon.png');

    this.load.text('colourData', 'assets/data/colourData.json');
  },
  create: function() {
    this.state.start('Story');
  }
};