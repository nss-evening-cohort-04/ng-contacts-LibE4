"use strict";

app.controller("ContactViewCtrl", function($scope, $routeParams, ContactFactory){
	$scope.selectedContact = {};
	let contactId = $routeParams.id;
	console.log("$routeParams", contactId);
	ContactFactory.getSingleContact(contactId).then(function(oneContact){
		oneContact.id = contactId;
		console.log("oneContact", oneContact);
		$scope.selectedContact = oneContact;
	});
	
});