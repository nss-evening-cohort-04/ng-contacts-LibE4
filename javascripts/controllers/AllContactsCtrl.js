"use strict";

app.controller("AllContactsCtrl", function($scope, $rootScope, ContactFactory){
	$scope.contacts = [];

	let getContacts = function(){
		ContactFactory.getContactList($rootScope.user.uid).then(function(fbContacts){
			$scope.contacts = fbContacts;
		});
	};
	getContacts();
	
	$scope.deleteContact = function(itemId){
		ContactFactory.deleteContact(itemId).then(function(){
			getContacts();
		});
	};
});