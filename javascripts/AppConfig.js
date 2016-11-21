"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when('/contacts/all', {
				templateUrl: 'partials/AllContacts.html',
				controller: 'AllContactsCtrl'
		})
		.when('/contacts/new', {
			templateUrl: 'partials/NewContacts.html',
			controller: 'NewContactsCtrl'
		})
		.when('/contacts/view/:id', {
			templateUrl: 'partials/view-contact.html',
			controller: 'ContactViewCtrl'
		})		
		.when('/contacts/edit/:id', {
			templateUrl: 'partials/NewContacts.html',
			controller: 'ContactEditCtrl'
		})
		.otherwise('/contacts/all');
;
});
