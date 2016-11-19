"use strict";

app.controller("ContactsCtrl", function($scope, ContactFactory){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newContact = {};
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

	$scope.viewAllContacts = function(){
		console.log("you clicked all contacts");
		$scope.showListView = true;
	};
	$scope.viewNewContact = function(){
		console.log("you clicked new contact");
		$scope.showListView = false;
	};

	$scope.addNewContact = function(){
		ContactFactory.postNewContact($scope.newContact).then(function(contactId){
			getContacts();
			$scope.newContact = {};
			$scope.showListView = true;
		})
	};

	$scope.deleteContact = function(){
		console.log("event", event.target.getAttribute("id"));
		ContactFactory.deleteContact(event.target.getAttribute("id")).then(function(){
			// getContacts();
		console.log("event after");
		})
		console.log("event aftern promise");
	};
	
});