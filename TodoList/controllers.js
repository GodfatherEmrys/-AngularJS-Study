angular.module('todoApp').controller('todoCtrl', function($scope,$http,todoService){

    $scope.data = todoService.read().then(function(res){
        console.log("adfadsf "+res.length);
    });

    // $http({
    //     method:"GET",
    //     url:"data.json"
    // }).then(function (response){
    //     $scope.data = response.data;
    // });
    
    $scope.add = function(newTodo_title){
        todoService.create(newTodo_title);
    }
    
    $scope.remove = function(index){
        todoService.delete(index);
    }

    $scope.update = function(){
        todoService.update();
    }
    
});