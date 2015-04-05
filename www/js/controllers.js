angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FeedsCtrl', function($http, $scope, Feeds) {

	var feedUrls = [
		"http://yle.fi/uutiset/rss/paauutiset.rss", 
		"http://www.iltalehti.fi/rss.xml"
	];

	feedUrls.forEach(function(feedUrl) {
		Feeds.get(feedUrl, function(data) {
			$scope.feedItems = data.rss.channel.item;
		});
	});

	// Bind feed items to $scope
	//Feeds.get(feedUrl, function(data) {
	//	$scope.feedItems = data.rss.channel.item;
	//});
	
});
