angular.module('starter.services', [])

.factory('Feeds', function($http) {
	function get(feedUrl, callback) {
    	$http.get(feedUrl, {
			transformResponse:function(data) {
            	// convert to JSON for the success function below
                var x2js = new X2JS();
                var json = x2js.xml_str2json( data );
                return json;
            }
        })
        .success(function(data, status) {
        	// send converted data back to callback
            callback(data);
        })
	}

    return {
		get: get
	}
});

