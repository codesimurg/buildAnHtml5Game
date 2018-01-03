var PopBubbles = window.PopBubbles || {};
PopBubbles.Game = (function($){
	var Game = function(){
		this.init = function(){
			$(".but_start_game").bind("click",startGame);
		};
		var startGame = function(){
			$(".but_start_game").unbind("click");
			PopBubbles.ui.hideDialog();
		};
	};
	return Game;
})(jQuery);
