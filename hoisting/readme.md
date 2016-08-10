Hoisting
========

To explain hoisting we are going to create a simple function called ` loadUserProfiles ` this function will recieve a string array parameter , the function will evatulate the size of the array and depending on array size and will print a diferent message.

# execute var example code
```
node var_example.js

```

# execute let example code
```
node let_example.js

```

### VAR Example

In ES5 JavaScript the code get moved to the top of the most closest scope this means all var declarations go to the top of the near encloser function, this is knowed as hoisting. In the case of the loadUserProfiles function before is executed the it's transfor to this:

```

function loadUserProfiles(userNames){
    var slowMessage, fastMessage;
    if(userNames.length > 3){
        slowMessage = "This could take a while";
        displayMessage(slowMessage);
    } else {
        fastMessage = "Loading users";
        displayMessage(fastMessage);
    }

    console.log(fastMessage);
}

```

making able to print the ` console.log(fastMessage); ` and getting a undefined value.

### LET example Example

In ES2015 JavaScript implements a new key word declaration for variables: ' let '. The let variables declaration scope the variables to the nearest block, not the the nearest  closer funciont avoid in the hoisting.

```
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
```

in the case of our loadUserProfiles funtion will throw a Reference Error because the fastMessage didn't decalred outside of the else statement
