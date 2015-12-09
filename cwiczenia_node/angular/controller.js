"use strict";

var myImages = angular.module('myImages', []);

myImages.controller('imagesCtrl', function ($scope) {
	$scope.images = [
		{"name": "Spring",
		 "source" : "http://www.aliceblue.co.uk/wp-content/uploads/mask.jpg",
		 "date": "2015"
		},
		{"name": "Circus",
		 "source": "http://www.aliceblue.co.uk/wp-content/uploads/France.jpg",
		 "date": "2015"
		},
		{"name": "Libra",
		 "source": "http://www.aliceblue.co.uk/wp-content/uploads/libre.jpg",
		 "date": "2015"
		},
		{"name": "Chicken No.9",
		 "source": "http://www.aliceblue.co.uk/wp-content/uploads/kurczak-LOL-cut.jpg",
		 "date": "2014"
		},
		{"name": "BeYou - Water",
		 "source": "http://www.aliceblue.co.uk/wp-content/uploads/be-you-01.jpg",
		 "date": "2014"
		}
	]
});

	
