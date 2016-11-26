(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.userData = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    favorite_dish: ''
  };

  service.getUserData = function(){
    console.log("service.getUserData", service.userData);
    return service.userData;
  };

  service.setUserData = function(userdata){
    service.userData = userdata;
    return "Your information has been saved";
  };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getDish = function (short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json');
  };



}



})();
