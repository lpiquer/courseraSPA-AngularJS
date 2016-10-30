(function (){

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

	$scope.result= "";
	$scope.dishes = "";

	$scope.checkInput = function(){
		if ($scope.dishes === "")
			$scope.result = "Please enter data first";
		else{
			var listDishes = $scope.dishes.split(',');
			console.log(listDishes.length);		
			if (listDishes.length <= 3)
				$scope.result = "Enjoy!";
			else
				$scope.result = "Too much!";
		}
	};

};



})();