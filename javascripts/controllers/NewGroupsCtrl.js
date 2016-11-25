"use strict";

app.controller("NewGroupsCtrl", function($scope, $rootScope, $location, GroupFactory){
	$scope.newGroup = {};

	$scope.addNewGroup = function(){
		$scope.newGroup.uid = $rootScope.user.uid;
		GroupFactory.postNewGroup($scope.newGroup).then(function(groupId){
			$location.url("/groups/all");
			$scope.newGroup = {};
		});
	};
	
});
