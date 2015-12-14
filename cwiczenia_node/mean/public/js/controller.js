var ctrl = angular.module('ctrl', []);

ctrl.controller('blogpostlist', function ($scope, $http) {
	$http.get('/allposts').success(function (data) {
		console.log('data received');
		$scope.posts = data;
	});
});

ctrl.controller('submitNewPost', function ($scope, $http) {
	$scope.newpost = "";
	$scope.submitNewPost = function(){
		console.log($scope.newpost.content);
		$http.post('/admin', $scope.newpost).success(function (data) {
			console.log(data);
		});
	};
});
