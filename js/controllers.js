;(function(){
	var sociopeepsControllers = angular.module('sociopeepsControllers', []);

	//register a peeps listing controller as "PeepsListCtrl"
	//with dependencies $scope object, Peep service and a function to query the data
	sociopeepsControllers.controller('PeepsListCtrl', ['$scope', 'Peep', function($scope, Peep){
		$scope.peeps = Peep.query(); //query action defined in the service
		$scope.sortOptions = 'age'; //default sort by option
	}]);

	//register PeepDetailCtrl 
	sociopeepsControllers.controller('PeepDetailCtrl', ['$scope', '$routeParams', 'Peep', function($scope, $routeParams, Peep) {
		$scope.peeps = Peep.query();
		$scope.whichPeep = $routeParams.peepId;
	}]);

})();