(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', 'items'];
function ItemsListController(MenuDataService, items) {
  	var list = this;
  	console.log("itemsList", items);
  	list.items = items;
}

})();
