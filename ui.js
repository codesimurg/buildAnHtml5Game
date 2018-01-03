var PopBubbles = window.PopBubbles || {};
PopBubbles.ui = (function($){
	var ui = {
		init : function(){
		},
		hideDialog : function(){
			$(".dialog").fadeOut(300);
		}
	};
	return ui;
})(jQuery);
