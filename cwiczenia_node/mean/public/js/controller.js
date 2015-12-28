var ctrl = angular.module('ctrl', []);

ctrl.controller('blogpostlist', function ($scope, $http) {
	function reload(){
		$http.get('/allposts').success(function (data) {
			console.log('data received');
			$scope.posts = data;
		});
	}
	reload();
	$scope.postDelete = function (id) {
		console.log(id);
		$http.delete('/allposts', {'params' : {'toDel' : id } }).success(function (data) {
			console.log(data);
		});
		reload();
	};
});
ctrl.controller('detailpost', function ($scope, $http, $routeParams) {
	$http.get('/getonepost', {'params' : {'detail' : $routeParams.id}}).success(function (data) {
		console.log(data);
		$scope.post = data;
		$scope.comments = data;
	});
});

ctrl.controller('submitNewPost', function ($scope, $http) {
	$scope.newpost = "";
	$scope.submitNewPost = function(){
		console.log($scope.newpost.content);
		$http.post('/admin', $scope.newpost).success(function (data) {
			console.log(data);
			$scope.newpost = "";
		});
	};
});

ctrl.controller('newComment', function($scope, $http, $routeParams) {
	$scope.newComment = '';
	$scope.submitNewComment = function () {
		$scope.newComment.foreignId = $routeParams.id;
		$http.post('/getonepost', $scope.newComment).success(function (data) {
			console.log(data)

		});
	};
});

