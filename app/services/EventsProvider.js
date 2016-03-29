mainModule.provider('EventsProvider',  function  () {
	// body...
	var trainigData;
	this.setData = function(data){
		trainigData = data;
	}
	this.$get = [ '$rootScope', function($rootScope) {
		return  {
			getTrainigData: function() {
				return trainigData;
			}
		}
	}];
});