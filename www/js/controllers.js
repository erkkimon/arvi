angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FeedsCtrl', function($http, $scope, $ionicPlatform, $cordovaInAppBrowser, Feeds) {

  $ionicPlatform.ready(function() {

     var options = {
	      location: 'yes',
	      clearcache: 'yes',
	      toolbar: 'yes',
	      closebuttoncaption: 'Valmis'
	    };
	
	    $scope.openlink = function(link) {
	      $cordovaInAppBrowser.open(link, '_blank', options)
	        .then(function(event) {
	          // success
	        })
	        .catch(function(event) {
	          // error
	        });
	    }
	
	  });

	var feedUrls = [
		"http://yle.fi/uutiset/rss/paauutiset.rss", 
		"http://www.iltalehti.fi/rss.xml",
		"http://www.hs.fi/rss/?osastot=kotimaa"	
	];

	var allFeedItems = [];
	feedUrls.forEach(function(feedUrl) {
		Feeds.get(feedUrl, function(data) {
			//allFeedItems = data.rss.channel.item;
			data.rss.channel["item"].forEach(function(feedItem) {
				feedItem["timestamp"] = Date.parse(feedItem["pubDate"])/1000;
				feedItem["mediaName"] = feedItem["link"]
					.replace(/^https?\:\/\//, "")
					.replace(/^www./, "")
					.replace(/\/.*/, "");
				if(!("enclosure" in feedItem)) {
					feedItem["enclosure"] = [];
					feedItem.enclosure["_url"] = "/img/news-default-bg.png";
				}
				allFeedItems.push(feedItem);
				//if(("_url" in feedItem.enclosure)) {
					//feedItem.enclosure["_url"] = "";
				//}
				console.log(feedItem.enclosure["_url"]);
			});
		});
	});

	$scope.feedItems = allFeedItems;

});
