// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // var conditionalObj {
  // 	p: function
  // 	arr: function
  // 	objectFunc: function
  // 	findFunc: function
  // }

  // Function declaration declares for object primatives and arrays
  // Check if primative
  var p = function(element) {
  	//console.log(typeof element);
  	if ( typeof element === "string" || typeof element === "number" || typeof element === "boolean" ) {
  		return (typeof element === "string" ?  '"' + element + '"' : element.toString())
  	}
  };

  // Check if its an array
  var arr = function(array) {
  	if ( Array.isArray(array) ) {
  		return ("[" + _.map(array, function(a) { 
  			return stringifyJSON(a);
		}) + "]");
  	}
  }

  // Check if its an object
  var objectFunc = function(o) {
  	var results = [];

  	if ( typeof o === "object") {
  		for (var key in o) {
  			if (typeof o[key] === 'function') {
  				return '{}';
  			}
  			results.push('"' + key + '"' + ":" + stringifyJSON(o[key]));
  		}
  		return "{" + results.join(',') + "}";
  	}
  }

  var findFunc = function(value) {
  	if (typeof value === 'function') {
  		return '{}'

  	}
  }
  // Check object type, then run appropriate function
  if (obj === null) {
  	return 'null'
  }
  else if (p(obj)) {
  	return p(obj);
  } 
  else if (arr(obj)) {
  	return arr(obj);
  } 
  else if (objectFunc(obj)) {
  	return objectFunc(obj);
  }
  // else if (findFunc(obj)) {
  // 	return findFunc(obj);
  // }


};
