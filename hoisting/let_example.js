function loadUserProfiles(userNames){
    if(userNames.length > 3){
        let slowMessage = "This could take a while";
        displayMessage(slowMessage);
    } else {
        let fastMessage = "Loading users";
        displayMessage(fastMessage);
    }

    console.log(fastMessage);
}

function displayMessage(message){
    //do something ex: show spinner...
}

//what will happen when case userNames.length > 3
loadUserProfiles(['Jhon', 'Carl', 'Pepe', 'Monty']); // => will show undefined for fastMessage