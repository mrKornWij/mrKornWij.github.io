//IIFE
(function () {
    'use_strict'; //protect things leak to the global scope

    //
    angular
        .module("LunchCheck", []) // Module/App names LunchCheck which does not have any dependency
        .controller("LunchCheckController", LunchCheckController); //Controller which will control with LunchCheckController function

    // inject $scope as an argument into MsgController. this will help protect argument from minification 
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
        $scope.CheckingFoods = function () { 
            if ($scope.foods !== undefined) { //strictly not equal
                const foodsList = $scope.foods.split(", ");
                console.log(foodsList.length);
                if (foodsList.length >=  1 && foodsList.length <= 3) {
                    console.log(foodsList[0]);
                    if (foodsList.length === 1 && foodsList[0] === "") {
                        $scope.result = "Please Enter Data First!"; 
                    }
                    else {
                        $scope.result = "Enjoy!";
                    }
                }
                else if (foodsList.length > 3) {
                    $scope.result = "Too Much!";
                }
            }
            else if ($scope.foods === undefined || $scope.foods === "") {
                $scope.result = "Please Enter Data First!"; 
            }
        };
    }
})(); 