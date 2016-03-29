mainModule.filter('durationFormatter', function () {
	return function(duration) {
		if(duration <=4 ) {
			return "Half a day session";
		} else {
			return "Full Day session";
		}
	}
})