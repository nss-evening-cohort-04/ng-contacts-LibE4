"use strict";

app.controller("NewContactsCtrl", function($scope, $rootScope, $location, ContactFactory){
	$scope.newContact = {};

	$scope.addNewContact = function(){
		$scope.newContact.uid = $rootScope.user.uid;
		ContactFactory.postNewContact($scope.newContact).then(function(contactId){
			$location.url("/contacts/all");
			$scope.newContact = {};
		});
	};
	
});