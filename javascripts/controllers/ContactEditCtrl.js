"use strict";

app.controller("ContactEditCtrl", function($scope, $routeParams, $location, ContactFactory){
	$scope.newContact = {};

	let contactId = $routeParams.id;
		console.log("contactId", contactId);
	ContactFactory.getSingleContact(contactId).then(function(oneContact){
		oneContact.id = contactId;
		$scope.newContact = oneContact;
	});
	$scope.addNewContact = function(){
		console.log("edit", $scope.newContact);
		ContactFactory.editContact($scope.newContact).then(function(response){
			$scope.newContact = {};
			$location.url("/contacts/list")			
		})
	}
	
});
