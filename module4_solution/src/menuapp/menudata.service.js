(function(){
'use strict';
angular.module('data', []);

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http','ApiBasePath'];
function MenuDataService($http, ApiBasePath){
		console.log("MenuDataService");
	var service = this;

	service.getAllCategories = function(){
		console.log("getAllCategories");

		return $http({
			method: "GET",
			url: ApiBasePath + '/categories.json'
		}).then(function(result) {
			return result.data;
		})

	};

	service.getItemsForCategory = function(categoryShortName){
		console.log("getItemsForCategory: ", categoryShortName);
		return $http({
			method: "GET",
			url: ApiBasePath + '/menu_items.json?category=' + categoryShortName
		}).then(function(result) {
			return result.data;
		})
	};

};

})();
