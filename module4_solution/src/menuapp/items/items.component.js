(function(){
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/menuapp/items/items.template.html',
      bindings: {
        items: '<'
      }
    });
})();
