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
		  	name:"New Group",
		  	url:"#/groups/new"
		  }, 
		  {
		  	name:"All Groups",
		  	url:"#/groups/all"
		  },
		  {
		  	name:"All Contacts",
		  	url:"#/contacts/all"
		  }		  
  	];
});
