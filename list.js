angular.module('todoApp',[])
.controller('todoCtrl',['$scope',function($scope){
    $scope.todos=[
        { text:'Grocery',done:false},
        { text:'Books',done:false },
         { text:'Gas',done:false}
    ];
    
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
    
    $scope.remove=function(){
    var delTodo=$scope.todos;
        $scope.todos=[];
        angular.forEach(delTodo, function(todo){
            if(!todo.done)$scope.todos.push(todo);
        });
    };
    
   $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };   
}]);