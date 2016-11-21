"use strict";

app.controller("NavCtrl", function($scope){
	$scope.navContacts = 
		[
			{
				name:"Logout",
				url:"#/logout"
			},
		  {
		  	name:"New Contact",
		  	url:"#/contacts/new"
		  }, 
		  {
		  	name:"All Contacts",
		  	url:"#/contacts/all"
		  }
  	];
});
