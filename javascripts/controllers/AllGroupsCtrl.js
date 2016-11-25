"use strict";

app.controller("AllGroupsCtrl", function($scope, $rootScope, GroupFactory){
	$scope.groups = [];

	let getGroups = function(){
		GroupFactory.getGroupList($rootScope.user.uid).then(function(fbGroups){
			$scope.groups = fbGroups;
		});
	};
	getGroups();

	// GroupFactory.getGroupList().then(function(fbGroups){
	// 	$scope.groups = fbGroups;
	// })
	
	$scope.deleteGroup = function(itemId){
		GroupFactory.deleteGroup(itemId).then(function(){
			getGroups();
		});
	};
});