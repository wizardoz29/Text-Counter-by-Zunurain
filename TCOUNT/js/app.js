(function(){

  var app = angular.module("myapp",[]);


  let tfunc = function($scope, $http){
  
    $scope.title = "Count that text!";
    $scope.body = "This tool automatically counts your text input, in real time! This is useful for online marketers, students, content writers e.t.c. Just enter the text or copy-paste, it will give the count value."
  
  };

    app.controller("tcount", tfunc)
  
}())