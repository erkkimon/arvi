angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FeedsCtrl', function($http, $scope, DataSource) {
//  $scope.playlists = [
//    { title: 'Pena-Erkki veti itseään turpaan' },
//    { title: 'Ruotsi hävisi Suomelle 7–5' },
//    { title: 'Antti onkin ilmestyskirjan peto' },
//    { title: 'Orava pihalla – katso kuvat' }
//  ];

	    setData = function(data) {
			        //$scope.dataSet = data;
					console.log(data.rss.channel.item[5].title);
					    }
		         
		    DataSource.get(setData);

});
