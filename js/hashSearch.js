angular.module('MyApp', []).directive('animate', function(){
  return function(scope, elm, attrs) {
    setTimeout(function(){
      elm.addClass('animate');
    });
  };
})


function TwitterCtrl($scope, $http) {
  $scope.hashtag = 'news';
  
  var interval;
  var lastID;
  
  $scope.getResults = function() {
    $http(
      {
        method: 'JSONP',
        url: 'http://search.twitter.com/search.json',
        params: {
          'q': encodeURIComponent('#' + $scope.hashtag),
          'since_id': lastID || '',
          'rpp': 5,
          'result_type': 'recent',
          'callback': 'JSON_CALLBACK'
        }
      }
    )
    .success(
      function(data) {
        if ( data.results && data.results.length ) {
          if ( data.max_id === lastID ) {
            return;
          }
          
          lastID = data.max_id;
          
          angular.forEach(
            data.results,
            function(value, key) {
              $scope.tweets.unshift(
                value
              );
            }
          );
        }
      }
    );
  }
  
  
  $scope.initResults = function() {
    /* No hashtag? */
    if ( ! $scope.hashtag ) {
      return;
    }
    
    /* Clear items list */
    $scope.tweets = [];
    
    /* Start by null */
    lastID = 0;
    
    /* Reset progress bar */
    $scope.progressClass = '';
    $scope.progressClass = 'load';
    
    /* Fire */
    $scope.getResults();
    
    /* Set interval */
    interval = setInterval(
      function() {
        $scope.getResults();
      },
      10000
    );
  }
  
  $scope.initResults();
}