(function(){
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['serviceUserData'];
  function MyInfoController(serviceUserData){
    var myInfo = this;
    myInfo.user = serviceUserData;
  };
})();

/*
  MyInfoController.$inject = ['MenuService'];
  function MyInfoController( MenuService){
    var myInfo = this;


    myInfo.getUserData = function(){
      console.log("myInfo.getUserData");
      MenuService.getUserData().then(function(response){
        myInfo.user = response.data;
        console.log("Response ok")
      }, function (response){
        console.log("Error en ctrl.getUserData")
      });
    };
*/
