"use strict";

app.factory("GroupFactory", function($q, $http, FIREBASE_CONFIG){
	var getGroupList = function(userId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/groups.json?orderBy="uid"&equalTo="${userId}"`)
			.success(function(response){
				let groups = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					groups.push(response[key]);
				});
				resolve(groups);
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

	var deleteGroup =  function(groupId){
		return $q((resolve, reject) =>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/groups/${groupId}.json`
			)
			.success(function(deleteResponse){
				resolve();
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var getSingleGroup = function(groupId){
		return $q((resolve, reject) =>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/groups/${groupId}.json`
			)
			.success(function(getSingleResponse){
				resolve(getSingleResponse);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var editGroup = function(editGroup){
		return $q((resolve, reject) =>{
			$http.put(`${FIREBASE_CONFIG.databaseURL}/groups/${editGroup.id}.json`,
				JSON.stringify(editGroup)
			)
			.success(function(editResponse){
				resolve(editResponse);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	return {getGroupList: getGroupList,
					postNewGroup: postNewGroup,
					getSingleGroup: getSingleGroup,
					editGroup: editGroup,
					deleteGroup: deleteGroup};
});