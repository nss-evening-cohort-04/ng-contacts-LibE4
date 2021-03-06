"use strict";

app.controller("ContactEditCtrl", function($scope, $routeParams, $location, ContactFactory){
	$scope.newContact = {};

	let contactId = $routeParams.id;
	ContactFactory.getSingleContact(contactId).then(function(oneContact){
		oneContact.id = contactId;
		$scope.newContact = oneContact;
	});
	$scope.addNewContact = function(){
		ContactFactory.editContact($scope.newContact).then(function(response){
			$scope.newContact = {};
			$location.url("/contacts/all");			
		});
	};
	
});
