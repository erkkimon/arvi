angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FeedsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Pena-Erkki veti itseään turpaan' },
    { title: 'Ruotsi hävisi Suomelle 7–5' },
    { title: 'Antti onkin ilmestyskirjan peto' },
    { title: 'Orava pihalla – katso kuvat' }
  ];
});
