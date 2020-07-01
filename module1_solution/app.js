( function () {

'use strict';

angular.module("LunchCheck",[])


.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){

  $scope.check= function () {
   var result= checkItems($scope.LunchList);
   $scope.message=messageToPrint(result);
  };

          function checkItems(LunchList){

          var array = LunchList.split(',');
          var  count = 0;
              for(var x in array)
              {
                if(array[x].length != 0)
                count++;
              }
        return count;
                }
        function messageToPrint(result){
              if (result === 0){
              return "Enter valid input!";
            }

              else if(result <= 3) {
              return "Enjoy";
            }
              else{
              return" Too much!";
            }
        }




  }


})();
