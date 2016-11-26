(function(){
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'ApiPath'];
function SignUpController( MenuService, ApiPath){
  var ctrl = this;

  ctrl.user = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    favorite_dish: ''
  };

  ctrl.message = '';

  ctrl.setUserData = function(){
    MenuService.getDish(ctrl.user.favorite_dish)
    .then(function (response) {
      ctrl.user.dishData = response.data;
      ctrl.user.dishImage = ApiPath + '/images/' + ctrl.user.favorite_dish + '.jpg';
      ctrl.message = MenuService.setUserData(ctrl.user);
    }, function (response){
      ctrl.message = "Dish not found!";
    });
  };
};
})();
