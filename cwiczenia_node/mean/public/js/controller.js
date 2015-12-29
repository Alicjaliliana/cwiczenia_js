
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
	});
});

ctrl.controller('submitNewPost', function ($scope, $http) {
	var date = new Date();
	var d = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
	$scope.newpost = "";
	$scope.submitNewPost = function(){
		$scope.newpost.date = d;
		console.log($scope.newpost.date);
		$http.post('/admin', $scope.newpost).success(function (data) {
			console.log(data);
			$scope.newpost = "";
		});
	};
});

ctrl.controller('newComment', function($scope, $http, $routeParams) {
	var date = new Date();

	function reload () {
		$http.get('/getcomments', {'params' : {'foreignId' : $routeParams.id}}).success(function (data) {
		console.log(data);
		$scope.comments = data;
		});
	};
	
	reload();
	$scope.newComment = '';
	
	$scope.submitNewComment = function () {
		$scope.newComment.foreignId = $routeParams.id;
		$scope.newComment.date = date;
		console.log(date);
		$http.post('/getcomments', $scope.newComment).success(function (data) {
			reload();
			$scope.newComment = '';
		});
	};

	$scope.delCom = function (id) {
		console.log(id);
		$http.delete('/getcomments', {'params' : {'toDel' : id}}).success(function(data) {
			consol.log(data);
		});
		reload();
	}
});

