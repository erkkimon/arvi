angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FeedsCtrl', function($http, $scope, Feeds) {
//  $scope.playlists = [
//    { title: 'Pena-Erkki veti itseään turpaan' },
//    { title: 'Ruotsi hävisi Suomelle 7–5' },
//    { title: 'Antti onkin ilmestyskirjan peto' },
//    { title: 'Orava pihalla – katso kuvat' }
//  ];

feedItems = function(data) {
	$scope.feedItems = data.rss.channel.item[5].title;
					    }
		         
		    Feeds.get(feedItems);


//	console.log(Feeds.get());	

});
