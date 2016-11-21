"use strict";

app.controller("NewContactsCtrl", function($scope, $location, ContactFactory){
	$scope.newContact = {};

	$scope.addNewContact = function(){
		ContactFactory.postNewContact($scope.newContact).then(function(contactId){
			$location.url("/contacts/all");
			$scope.newContact = {};
		})
	};
	
});