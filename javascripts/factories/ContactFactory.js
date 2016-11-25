"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG){
	var getContactList = function(userId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userId}"`)
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
				JSON.stringify(
					{
						firstname: newContact.firstname,
						lastname: newContact.lastname,
						mobile: newContact.mobile,
						homePhone: newContact.homePhone,
						email: newContact.email,
						group: newContact.group,
						uid: newContact.uid,
						isGrouped: false
					}
				)
			)
			.success(function(postResponse){
				resolve(postResponse);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var postNewGroup = function(newGroup){
		return $q((resolve, reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/groups.json`,
				JSON.stringify(newGroup)
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
		});
	};

	var editContact = function(editContact){
		return $q((resolve, reject) =>{
			$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editContact.id}.json`,
				JSON.stringify(
					{
						firstname: editContact.firstname,
						lastname: editContact.lastname,
						mobile: editContact.mobile,
						homePhone: editContact.homePhone,
						email: editContact.email,
						group: editContact.group,
						uid: editContact.uid,
						isGrouped: editContact.isGrouped
					}
 				)
			)
			.success(function(editResponse){
				resolve(editResponse);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	return {getContactList: getContactList,
					postNewContact: postNewContact,
					postNewGroup: postNewGroup,
					getSingleContact: getSingleContact,
					editContact: editContact,
					deleteContact: deleteContact};
});