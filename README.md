### Give an example where call apply bind is. required?

Call, apply, bind can be used to invoke anonymous functions, to invoke a function and specifying the 'this', and to execute partially applied functions.

### What is the difference between readFile and readFileSync?

readFileSync() is synchronous and blocks execution until finished. readFile() are asynchronous and return immediately while they function in the background.

### What does process in node.js mean?

The process object in Node.js is a global object that can be accessed inside any module without requiring it. it provides various information sets about the runtime of a program. It has pre-defined methods  such as exit which can be used to know when a program in Node.js has completed its execution.

### Explain what node.js is?

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser

### What is the difference of JS from browser to JS on node.js

In the browser, Javascript is sandboxed for your safety. However, in nodejs, there is full access to the system like any other native application. This means we can read and write directly to/from the file system, have unrestricted access to the network, can execute software and interact with computer internals.

### Write three different ways to reverse a string in Javascript? a. using inbuilt method, b. iteratively, c. recursively

i) str.reverse();

ii) iteratively

```
let str = 'abcd'
let low = 0;
let high = str.length - 1;
while(low <= high){
  let temp = str[low];
  str[low] = str[high]
  str[high] = temp;
  low++;
  high--;
}

```

iii) recursively

```

function reverse(str, i){
  if( i < str.length/2)}
    return str
  }
  
  let temp = str[i];
  str[i] = str[str.length - 1 - i];
  str[str.length - 1 - i] = temp;
  
  return reverse(str, i+1)
  
}


```


### Write a program to check two objects are equal ( deep equal )


```
function compareObjects(obj1, obj2){
  if(Object.keys(obj1).length != Object.keys(obj2).length) return false
  
  let obj1Keys = Object.keys(obj1);
  
  for(let key of obj1Keys){
    if(!obj2.hasOwnProperty(key) && obj2[key] != obj1[key){
      return false
    }
  }
}

return true

}
```

### What is shallow equal?

A function for performing a shallow comparison between two objects or arrays. Two values have shallow equality when all of their members are strictly equal to the corresponding member of the other.


