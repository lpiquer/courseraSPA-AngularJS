(function(){
'use strict;'

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");




function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var list = this;

	list.found = [];

	list.getMatchedMenuItems = function(){
		var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
		promise.then(function(response){
			list.found = response;
		})
		.catch(function(error){
			console.log(error);
		});
	}
	  list.removeItem = function (itemIndex) {
	  	console.log("list antes:", list.found);
	    console.log("itemIndex: ", itemIndex);
	    list.found.splice(itemIndex, 1);
	    console.log("list despues:", list.found);
	  };

}
 
MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
	var service = this;

	service.getMatchedMenuItems = function(searchTerm){

		return $http({
			method: "GET",
			url: ApiBasePath
		}).then(function (result) {
		    var foundItems = result.data.menu_items;
		    var res = [];
		    angular.forEach(foundItems, function(item){
		    	console.log("searchTerm", searchTerm);
		    	if (item.description.indexOf(searchTerm) !== -1){
		    		res.push(item);
		    	}
		    });
		    return res;
		})
	};
};

})();