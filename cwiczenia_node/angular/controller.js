"use strict";

var myImagesCtrl = angular.module('myImagesCtrl', []);

myImagesCtrl.controller('imagesInitCtrl', ['$scope', '$http', function ($scope, $http) {
$http.get('images/images.json').success(function(data) {
	$scope.images = data;
	});
}]);

myImagesCtrl.controller('imagesDetCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.imageInit = $routeParams.imageInit;
}]);

	
