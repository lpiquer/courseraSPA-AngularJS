(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
	.service();

/*
ShoppingListCheckOffController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListCheckOffController(ShoppingListCheckOffService){
	var list = this;

	list.getToBuyItems = function(){
		return ShoppingListCheckOffService.getItems('toBuyItems');
	};

	list.getBoughtItems = function(){
		return ShoppingListCheckOffService.getItems('boughtItems');
	};

	list.getItems = function(selection){
		return ShoppingListCheckOffService.getItems(selection)
	};

	list.buyItem = function(index){
		ShoppingListCheckOffService.buyItem(index);
	};

	list.returnItem = function(index){
		ShoppingListCheckOffService.returnItem(index);
	};
};
*/

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var list = this;
	list.items = ShoppingListCheckOffService.getToBuyItems();

	list.buyItem = function(index){
		ShoppingListCheckOffService.buyItem(index);
	};

};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var list = this;
	list.items = ShoppingListCheckOffService.getBoughtItems();
};



function ShoppingListCheckOffService(){
	var service = this;

	var toBuyItems = [{
			name: 'Cookies', 
			quantity: 10
			},{
			name: 'Pizza', 
			quantity: 1
			},{
			name: 'Eggs', 
			quantity: 12
			},{
			name: 'Tomato', 
			quantity: 5
			},{
			name: 'Onion', 
			quantity: 3
			},{
			name: 'Milk', 
			quantity: 6
		}];
			
	var boughtItems = [];


	service.getToBuyItems = function(){
		return toBuyItems;
	};
	service.getBoughtItems = function(){
		return boughtItems;
	};

	
	service.buyItem = function(index){
		var item = toBuyItems[index];
		toBuyItems.splice(index, 1);
		boughtItems.push(item);
		console.log(item)
		console.log(toBuyItems)
		console.log(boughtItems)
	};

};

})();