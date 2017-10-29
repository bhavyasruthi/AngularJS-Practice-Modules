var mod = angular.module("ng-modelex",[]);
    
mod.controller("ngmodel-cntrl",ngmodelcntrl);
    function ngmodelcntrl($scope)
    {
        $scope.dateChanged = function()
        {
            console.log("date changed");
        }
    }