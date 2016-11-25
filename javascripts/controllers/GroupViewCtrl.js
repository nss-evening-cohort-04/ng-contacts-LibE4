"use strict";

app.controller("GroupViewCtrl", function($scope, $rootScope, $routeParams, GroupFactory, ContactFactory){
	$scope.selectedGroup = {};
	$scope.contacts = [];
	let groupId = $routeParams.id;
	GroupFactory.getSingleGroup(groupId).then(function(oneGroup){
		oneGroup.id = groupId;
		$scope.selectedGroup = oneGroup;
		ContactFactory.getContactList($rootScope.user.uid).then(function(fbContacts){
			$scope.contacts = fbContacts;
			let groupName = oneGroup.name;
			$scope.contacts.forEach(function(contact){
				contact.isGrouped = false;
				if (contact.hasOwnProperty("group")) {
					if (contact.group.hasOwnProperty(groupName)){
						contact.isGrouped = true;
					}
				}
			});
		});
	});	

	$scope.inputChange = function(checkContact){
		let groupName = $scope.selectedGroup.name;
		if (checkContact.hasOwnProperty("group")) {
				if (checkContact.group.hasOwnProperty(groupName)){
					delete checkContact.group[groupName];
					checkContact.isGrouped = false;
				} else {
					checkContact.group[groupName] = true;
					checkContact.isGrouped = true;
				}
		} else {
			checkContact.group = {};
			checkContact.group[groupName] = true;
			checkContact.isGrouped = true;
		}
		ContactFactory.editContact(checkContact).then(function(response){
			console.log("inputChange response", response);
		});
	};	

});