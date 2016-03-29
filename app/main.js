
var providerModule = angular.module('providerModule', []);

providerModule.provider('EventsP_Service',  [function EventsProvider () {
	// body...
	//Two ways of writing

	//using service approch i.e. using this key word
	var trainigData;
	this.setData = function(data){
		trainigData = data;
	}
	this.$get = function($rootScope) {
		return trainigData;
	};

	// Using factories approach i.e. return an object literal
	
	/*var trainigData;
	return {
		setData: function(data){
			trainigData = data;
		},
		$get : function() {
			return trainigData;
		}
	}*/
}]);

var mainModule = angular.module('Events', ['providerModule']);

mainModule.config(['EventsP_ServiceProvider', function(EventsProvider) {

 EventsProvider.setData("Student Sai");
}]);