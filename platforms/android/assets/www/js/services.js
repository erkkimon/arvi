angular.module('starter.services', [])

.factory('Feeds', ['$http',function($http){
       return {
           get: function(callback){
                $http.get(
                    'http://yle.fi/uutiset/rss/paauutiset.rss',
                    {transformResponse:function(data) {
                        // convert to JSON for the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
                        }
                    }
                )
                .success(function(data, status) {
                    // send converted data back to callback
                    callback(data);
                })
           }
       }
}]);

//.factory('Feeds', function($http) {
//
//	// http://rabidgadfly.com/2013/02/angular-and-xml-no-problem/
//
//	function getFeed(url, callback) {
//		$http.get(url, {
//			transformResponse: function(data) {
//				var x2js = new X2JS();
//				var json = x2js.xml_str2json(data);
//				return json;
//			}
//		})
//		.success(function(data, status) {
//			callback(data)
//		})
//	}
//
//	feeds = function(data) {
//		return data;
//	}
//
//	return {
//		feeds: feeds
//	}
//});
