var myPrt = angular.module('myPrt', ['ngRoute', 'myImagesCtrl']);

myPrt.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when ('/images', {
			templateUrl: 'partials/images-portfolio.html',
			controller: 'imagesInitCtrl'
		}).
		when('/images/:imageInit', {
			templateURl: 'partials/images-det.html',
			controller: 'imagesDetCtrl'
		}).
		otherwise ({
			redirectTo: '/images'
		});
	}]);
