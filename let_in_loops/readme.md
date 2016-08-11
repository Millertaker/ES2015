Hoisting
========

To explain how let helps into the loops let's look the ` saveUserProfiles ` who recieve a userNames string array and execute a ` _saveProfile ` function that simulate a HTTP request to save a username using timeout delay.

# execute var example code
```
node var_example.js

```

# execute let example code
```
node let_example.js

```

### VAR Example

```
function saveUserProfiles(userNames){
    for(var i in userNames){
        _saveProfile("/users/" + userNames[i], function(){
            console.log('Fetched by' + userNames[i]);
        })
    }
}
```

after hoisting

```
function saveUserProfiles(userNames){
    var i
    .
    .
    .
    //goes up
    for( in userNames){
        _saveProfile("/users/" + userNames[i], function(){
            console.log('Fetched by' + userNames[i]);
        })
    }
}
```

Because the hoisting issue in ES5 the ` var i  ` declaration goes to the top to near function closing making the the same i variable shared across each look iteration. This makes each iteration only make the register of the function in the  [line 5 of](let_example.js#L5)  the ` var_example.js ` and not been executed and this happens four time makin the i value grows to the userNames array size (in this case 3)

So after the _savePrifle have been executed 4 times the callback function will be executed and i takes the last value hold it by the i variable value (in this case 3) making take the  next result:

```{r, engine='bash', count_lines}

Fetched byMonty
Fetched byMonty
Fetched byMonty
Fetched byMonty

```

### LET example Example

