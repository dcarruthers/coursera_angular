(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.lunchMsg = String();
    $scope.lunch = String();

    $scope.checkLunch = function(){
      var lunchArr = $scope.lunch.split(',');
      lunchArr = cleanEmpties(lunchArr);

      if (!lunchArr.length) {
        $scope.lunchMsg = "Please enter data first.";
      }else if(lunchArr.length > 3){
        $scope.lunchMsg = "Too Much!";
      }else{
        $scope.lunchMsg = "Enjoy!";
      }
    };

    function cleanEmpties(arr){
      return arr.filter(v => v!=='')
    }
}
})();
