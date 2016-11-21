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
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`
			)
			.success(function(deleteResponse){
				console.log("deleteResponse", deleteResponse);
				resolve();
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var getSingleContact = function(contactId){
		return $q((resolve, reject) =>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`
			)
			.success(function(getSingleResponse){
				resolve(getSingleResponse);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		})
	}

	var editContact = function(editContact){
		return $q((resolve, reject) =>{
			$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editContact.id}.json`,
				JSON.stringify(editContact)
			)
			.success(function(editResponse){
				resolve(editResponse);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		})
	}

	return {getContactList: getContactList,
					postNewContact: postNewContact,
					getSingleContact: getSingleContact,
					editContact: editContact,
					deleteContact: deleteContact}
});