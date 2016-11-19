(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider


		.state('home', {
			url: '/',
			templateUrl: 'src/menuapp/templates/home.html'
		})

		.state('categories', {
			url: '/categories',
			templateUrl: 'src/menuapp/templates/categorieslist.template.html',
			controller: 'CategoriesListController as list',
			resolve: {
				items: ['MenuDataService', function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		})

		.state('items', {
			url: '/items/{shortName}',
			templateUrl: 'src/menuapp/templates/itemslist.template.html',
			controller: 'ItemsListController as list',
			resolve: {
				items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
					console.log("stateParam", $stateParams.shortName);
					return MenuDataService.getItemsForCategory($stateParams.shortName);
				}]
			}
		});


	}


})();
