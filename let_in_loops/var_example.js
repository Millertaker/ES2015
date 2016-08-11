"use strict";

function saveUserProfiles(userNames){
    for(var i in userNames){
        _saveProfile("/users/" + userNames[i], function(){
            console.log('Fetched by' + userNames[i]);
        })
    }
}

function _saveProfile(url, cb){
    //simulate a HTTP request and delay and execute a callback
    setTimeout(cb, 300);

}

saveUserProfiles(['Jhon', 'Carl', 'Pepe', 'Monty']); // => will print Fetched by userNames array in the last index

