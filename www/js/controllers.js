angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FeedsCtrl', function($http, $scope, Feeds) {
		         
	// Bind feed items to $scope
	Feeds.get('http://yle.fi/uutiset/rss/paauutiset.rss', function(data) {
		$scope.feedItems = data.rss.channel.item;
	});
	
});
