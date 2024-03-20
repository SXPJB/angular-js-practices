let app = angular.module('todoApp', [])

app.controller('todoCtrl', function ($scope) {
    $scope.todos = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Build an app', done: false }
    ]

    $scope.addTodo = function(){
        $scope.todos.push({text: $scope.todoText, done: false})
        $scope.todoText = ''
    }

    $scope.remaining = function(){
        let count = 0
        angular.forEach($scope.todos, function(todo){
            count += todo.done ? 0 : 1
        })
        return count
    }

    $scope.archive = function(){
        let oldTodos = $scope.todos
        $scope.todos = []
        angular.forEach(oldTodos, function(todo){
            if(!todo.done) $scope.todos.push(todo)
        })
    }
})

/**
 * Create a new controller called tableCtrl
 * to call jsonPlaceholder API
 * and display the data in a table
 * */
app.controller('tableCtrl', function ($scope) {
    $scope.users = []
    $scope.loading = true
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            $scope.$apply(() => {
                $scope.users = data
                $scope.loading = false
            })
        })
        .catch(error => console.error(error))
})