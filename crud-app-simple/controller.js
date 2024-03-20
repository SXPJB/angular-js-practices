app.controller('CrudAppController', function ($scope) {
    $scope.data = [];
    $scope.editMode = false
    $scope.newItemName = '';
    $scope.selectdItemIndex = null;

    $scope.addItem = function () {
        $scope.data.push({
            id: $scope.data.length + 1,
            name: $scope.newItemName,
        });
        $scope.newItemName = '';
    };

    $scope.deleteItem = function (index) {
        $scope.data.splice(index, 1);
    }

    $scope.editItem = function (item) {
        $scope.selectdItemIndex = $scope.data.indexOf(item);
        $scope.newItemName = item.name;
        $scope.editMode = true
    }

    $scope.updateItem = function () {
        if ($scope.selectdItemIndex === null) return console.log('No item selected');
        $scope.data[$scope.selectdItemIndex].name = $scope.newItemName;
        $scope.newItemName = '';
        $scope.editMode = false
        $scope.selectdItemIndex = null;
    }
});