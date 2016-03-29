
mainModule.factory('EventsFactory', ['$log', function($log){

	return {
		eventName : "New Angular module",
		eventLogger : function() {
			$log.info("This is a factory");
		}
	}
	
}]);


mainModule.service('EventsService', [ function(){

	this.eventName = "New Angular module using Service";
	
}]);