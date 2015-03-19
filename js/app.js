//Closure function
;(function(){
	//set sociopeeps module with dependencies
	var sociopeeps = angular.module('sociopeeps', ['ngRoute','sociopeepsControllers','sociopeepsServices']);

	//configure routes
	sociopeeps.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/peeps', {
				templateUrl: 'partials/peeps-listing.html',
				controller: 'PeepsListCtrl'
			}).
			when('/peeps/:peepId', {
				templateUrl: 'partials/peep-detail.html',
				controller: 'PeepDetailCtrl'
			}).
			otherwise({
				redirectTo: '/peeps'
			});
	}]);
	/*//PeepsListCtrl
	//load data from JSON file
	//Use of $scope and $http module
	app.controller('PeepsListCtrl', function($scope, $http, ngDialog){
		$scope.peeps = '';
		//an HTTP GET request to the JSON file
		$http.get('../data/data.json').
			success(function(data, status, headers, config){
				//on success asign data to $scope.peeps
				$scope.peeps = data;
				
			}).
			error(function(data, status, headers, config){
				//log error
			});

			console.log($scope);

		$scope.clickToOpen = function(data) {
			ngDialog.open({
				template: 'modal.html',
				scope: $scope,
				data: $scope.peeps,
				callback: function() {
					console.log(data.id);
				}
			});
		}
	});*/
})();