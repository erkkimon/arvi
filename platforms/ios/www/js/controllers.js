angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FeedsCtrl', function($http, $scope, Feeds) {

	var feedUrls = [
		"http://yle.fi/uutiset/rss/paauutiset.rss", 
		"http://www.iltalehti.fi/rss.xml",
		"http://www.kouvolansanomat.fi/rss/uutiset.xml",
		"http://www.hs.fi/rss/?osastot=kotimaa"	
	];

	var allFeedItems = [];
	feedUrls.forEach(function(feedUrl) {
		Feeds.get(feedUrl, function(data) {
			//allFeedItems = data.rss.channel.item;
			data.rss.channel["item"].forEach(function(feedItem) {
				feedItem["timestamp"] = Date.parse(feedItem["pubDate"])/1000;
				allFeedItems.push(feedItem);
			});
		});
	});

	$scope.feedItems = allFeedItems;

});
