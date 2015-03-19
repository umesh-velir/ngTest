;(function(){
	//set services module with ngResource dependency
	var sociopeepsServices = angular.module('sociopeepsServices', ['ngResource']);

	//create custom service to provide 
	//access to the peeps data on the server
	//use factory function to inject $resource dependency via arguments
	sociopeepsServices.factory('Peep', ['$resource', function($resource){
		return $resource('data/data.json', {}, {
			query: {method: 'GET', isArray: true}
		});
	}]);
})();