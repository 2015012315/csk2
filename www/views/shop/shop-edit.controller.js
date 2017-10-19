(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      name:'蔡尚坤',
      ab:'',
      name1:'蔡尚坤',
      phone:'18350779974',
      phone1:'18350779974',
      createTime:'2017-9-28 15:30:00',
      email:'1254026798@qq.com',
      hylx:'111'

    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
