var MVapp = angular.module('MVapp', ['ngRoute', 'ctrl']);

MVapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'partials/main.html',	
			controller: 'blogpostlist'
		})
		.when('/admin', {
			templateUrl: '/partials/admin.html',
			controller: 'submitNewPost'
		})
		.when('/:id', {
			templateUrl: '/partials/details.html',
			controller: 'detailpost'
		})
		.otherwise ({
			redirectTo: '/'
		});
}]);
