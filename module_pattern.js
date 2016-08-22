var ray = (function(){
	

	return {
		speak: function() {
			var myArg = arguments[0] || '';
			console.log(myArg.say);
		}
	}
})();

ray.speak({ say: 'howyd' });