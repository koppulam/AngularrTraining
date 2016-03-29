mainModule.controller('eventsController', ['$scope', '$filter', '$animate', 'EventsFactory', 'EventsP_Service',
 function($scope, $filter, $animate, EventsFactory, EventsP_Service){
	$scope.isEditable = false;

	$scope.eventNameOnService =	EventsFactory.eventName;

	EventsFactory.eventLogger();
	$scope.eventDetails = {
		name: "Angular Training",
		location: "Hyderabad",
		duration: "2 weeks",
		trainerName: "Excel Online",
		logoSrc : 'img/angularjs-logo.png',
		cost: 300,
		sessions: [
		{
			name: "Session1",
			description: "Session 1 deatils and is basic",
			duration: 2,
			level : "Beginner",
			count: 0
		},
		{
			name: "Session4",
			description: "Session 4 deatils and is basic",
			duration: 1,
			level : "Beginner",
			count: 5
		},
		{
			name: "Session2",
			description: "Session 2 deatils and is Intermediate",
			duration: 8,
			level : "Intermediate",
			count: 4

		},
		{
			name: "Session3",
			description: "Session 3 deatils and is Advanced",
			duration: 2,
			level : "Advanced",
			count: 3

		}]
	};


	var message = "Good Going with the session";
	$scope.message = $filter("uppercase")(message);
	$scope.upMyVote = function(session) {
		session.count = session.count+1;
		if(session.count >0 ) {
			$scope.isEditable = false;
			$scope.message = "Good Going with the session";
		}
	};

	$scope.downMyVote = function(session) {
		session.count = session.count -1;
		if(session.count <0) {
			$scope.isEditable = true;
			$scope.message = "your session is very bad";
		}
	};

	$scope.onFocus = function() {
		$scope.focusMessage = "You are focused on input field";
	};

	$scope.onFocusOut = function() {
		$scope.focusMessage = "You are focused out of input field";
	}

	$scope.myName = EventsP_Service;
}]);