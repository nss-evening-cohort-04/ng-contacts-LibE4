"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG){
	var getContactList = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.success(function(response){
				let contacts = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					contacts.push(response[key]);
				});
				resolve(contacts);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var postNewContact = function(newContact){
		return $q((resolve, reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
				JSON.stringify(newContact)
			)
			.success(function(postResponse){
				resolve(postResponse);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var deleteContact =  function(contactId){
		return $q((resolve, reject) =>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
			.success(function(deleteResponse){
				console.log("deleteResponse", deleteResponse);;
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	return {getContactList: getContactList,
					postNewContact: postNewContact,
					deleteContact: deleteContact}
});