(function () {

  'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)



ToBuyController.$inject=['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService) {
var toBuy = this;
toBuy.items=ShoppingListCheckOffService.getToBuyItems();
toBuy.buy= function (itemIndex){
  ShoppingListCheckOffService.buyItem(itemIndex);
};


}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function AlreadyBoughtController (ShoppingListCheckOffService) {
  var bought=this;
  bought.items= ShoppingListCheckOffService.getBoughtItems();
  }


        function ShoppingListCheckOffService() {
         var service = this;

         var itemToBuy=[
        { name : "Cookies", quantity : 10},
        { name : "Sanitizers", quantity :2},
        { name : "Coke", quantity :5},
        { name : "Cream Cheese", quantity :2},
        { name : "KitKats", quantity :3}
         ];

        var itemsBought=[];
         service.buyItem = function(itemIndex) {
           itemsBought.push(itemToBuy[itemIndex]);
           itemToBuy.splice(itemIndex,1 );
        };
           service.getToBuyItems = function () {
             return itemToBuy;
           };

           service.getBoughtItems= function () {
             return itemsBought;
           };


        }





})();
