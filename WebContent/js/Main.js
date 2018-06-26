
window.onload = function () {
	var game = new Phaser.Game(1280, 900, Phaser.AUTO, 'game', null, false, true, {"arcade":true});
    // Add the States your game has.
    // game.state.add("Boot", Boot);
    // game.state.add("Menu", Menu);
    // game.state.add("Preload", Preload);
    game.state.add("Level", Level);
    game.state.add("Menu", BetState);
    game.state.start("Menu");    
};
