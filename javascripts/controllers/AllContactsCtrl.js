"use strict";

app.controller("AllContactsCtrl", function($scope, ContactFactory){
	$scope.contacts = [];

	let getContacts = function(){
		ContactFactory.getContactList().then(function(fbContacts){
			$scope.contacts = fbContacts;
		})
	}
	getContacts();

	ContactFactory.getContactList().then(function(fbContacts){
		console.log("contacts form controller", fbContacts);
		$scope.contacts = fbContacts;
	})
	
	$scope.deleteContact = function(itemId){
		console.log("event", event.target.getAttribute("id"));
		ContactFactory.deleteContact(itemId).then(function(){
			getContacts();
			console.log("event after");
		})
		console.log("event after promise");
	};
});