(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'蔡尚坤',
        ab:'',
        name1:'蔡尚坤',
        phone:'18350779974',
        phone1:'18350779974',
        createTime:'2017-9-28 15:30:00',
        email:'1254026798@qq.com',
        hylx:'111'
      });
    });
  }])
})();
