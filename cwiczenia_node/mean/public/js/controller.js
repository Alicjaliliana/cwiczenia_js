var app = angular.module('blog', []);

app.controller('blogpostlist', function ($scope) {
$scope.posts = [{'title': 'About me',
		 'description': 'A gantle introduction to my blog',
		 'category': 'me',
		 'content' : 'Lorem ipsum doler sit et centra etc...'},
                {'title': 'About me',
		 'description': 'A gantle introduction to my blog',
		 'category': 'me',
		 'content' : 'Lorem ipsum doler sit et centra etc...'},
		 ];

});


