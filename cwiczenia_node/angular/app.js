var myPortfolio = angular.module('myPortfolio', ['ngRoutes', 'myPortfolioCtrl'];

myPortfolio.config['$route', function($route) {
	$route.when ('/images', {
		templateUrl: 'partials/images-portfolio.html',
		controller: 'imagesDetCtrl'
	}).when('/images/"imageInit' {
		templateURl: 'partials/image-det.html',
		controller: 'imageInitCtrl'
	}).otherwise ({
		redirectTo: '/images'
	});
});
