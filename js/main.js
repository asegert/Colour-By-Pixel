var Pixel = Pixel || {};

Pixel.game = new Phaser.Game(960, 640, Phaser.AUTO);

Pixel.game.state.add('Boot', Pixel.BootState); 
Pixel.game.state.add('Preload', Pixel.PreloadState); 
Pixel.game.state.add('Game', Pixel.GameState);
Pixel.game.state.add('Story', Pixel.StoryState);

Pixel.game.state.start('Boot'); 