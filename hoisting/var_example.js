function loadUserProfiles(userNames){
    if(userNames.length > 3){
        var slowMessage = "This could take a while";
        displayMessage(slowMessage);
    } else {
        var fastMessage = "Loading users";
        displayMessage(fastMessage);
    }

    console.log(fastMessage);
}

function displayMessage(message){
    //do something ex: show spinner...
}

//what will happen when case userNames.length > 3
loadUserProfiles(['Jhon', 'Carl', 'Pepe', 'Monty']); // => will show undefined for fastMessage


