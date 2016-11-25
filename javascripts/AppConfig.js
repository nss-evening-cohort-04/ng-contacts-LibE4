"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	if (AuthFactory.isAuthenticated()){
		resolve();
	} else {
		reject();
	}
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
	firebase.initializeApp(FIREBASE_CONFIG);
	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
		let logged = AuthFactory.isAuthenticated();
		let appTo;
		if(currRoute.originalPath){
			appTo = currRoute.originalPath.indexOf('/auth') !== -1;
		}
		if(!appTo && !logged){
			event.preventDefault();
			$location.path('/auth');
		}
	});
});

app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
				templateUrl: 'partials/auth.html',
				controller: 'AuthCtrl'
		})
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
		.when('/groups/all', {
			templateUrl: 'partials/AllGroups.html',
			controller: 'AllGroupsCtrl'
		})
		.when('/groups/new', {
			templateUrl: 'partials/NewGroups.html',
			controller: 'NewGroupsCtrl'
		})
		.when('/groups/view/:id', {
			templateUrl: 'partials/view-group.html',
			controller: 'GroupViewCtrl'
		})		
		.when('/logout', {
				templateUrl: 'partials/auth.html',
				controller: 'AuthCtrl',
				resolve: {isAuth}
		})
		.otherwise('/auth');

});
