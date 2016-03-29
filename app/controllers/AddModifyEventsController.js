mainModule.controller('AddModifyEventsController', ['$scope', '$log',  function($scope, $log){
	$scope.submitHandler = function() {
		$log.log("Clicked on subimt: form submitted", $scope.eventDetail);
	};

	$scope.eventName = "Angular JS Training";
}]);