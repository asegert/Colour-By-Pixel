var Pixel = Pixel || {};

Pixel.StoryState = {
    create: function()
    {
        this.background = this.add.image(0, 0, 'backgroundMain');
        
        //Button to Choose art selection
        this.start = this.add.button(450, 400, 'start', function()
        {
            this.chooseArt();
        }, this);
        this.start.scale.setTo(0.8, 0.8);
    },
    chooseArt: function()
    {
        //CHange the background and remove previous button
        this.background.loadTexture('background');
        this.start.destroy();
        
        //Stores all data from JSON file
        this.allData = JSON.parse(this.game.cache.getText('colourData'));
        
        var count = 0;
        for(var i=0; i<this.allData.boards.length; i++)
        {
            //Create a button for each 'art' item and go to game once chosen
            var currBoard = this.add.button((200 + (250 * (i %2))), (100 + (180 * Math.floor(i/2))), this.allData.boards[i].image, function(board)
            {
                Pixel.currBoard = board.board;
                this.state.start('Game');
            }, this);
            currBoard.board = this.allData.boards[i].board;
        }
    }
}