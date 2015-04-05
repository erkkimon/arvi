angular.module('starter.services', [])

.factory('DataSource', ['$http',function($http){
       return {
           get: function(callback){
                $http.get(
                    'http://yle.fi/uutiset/rss/paauutiset.rss',
                    {transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
                        }
                    }
                ).
                success(function(data, status) {
                    // send the converted data back
                    // to the callback function
                    callback(data);
                })
           }
       }
}]);
