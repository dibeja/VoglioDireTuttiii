(function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initVDTTii();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initVDTTii();
	}

	function initVDTTii() {
		(window.VDTTii = function() {
		   if(confirm("Vuoi dire tutti?")){
		      $('input[type=checkbox]').attr('checked','checked');
		   }
		})();
	}

})();