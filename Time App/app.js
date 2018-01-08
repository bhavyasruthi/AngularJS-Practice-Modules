
var mmodule = angular.module("clock-mod",[]);
    
mmodule.controller("clock-cntrl",displayTime);
    function displayTime($scope)
    {
        
        //$scope.ftime = "12" + ""+new Date().getDate();;
        $scope.cTime= new Date().toTimeString();
        $scope.hi = function()
        {
            alert("hiiii"+$scope.name);
            //ftime="hi mine";
        }
        $scope.updateTime = function()
        {
            alert("updated");
            $scope.cTime= new Date().toTimeString();
        }
        
    }
