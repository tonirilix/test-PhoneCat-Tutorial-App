'use strict';

/* Controllers */
/**
* phonecatApp Module;
*
* Description
*/
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope', '$http',
	function($scope, $http){
	$scope.name = "World";
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data;
	});
  $scope.orderProp = 'age';

}])