// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // document.body
  // classList
  // childnodes
  var result = [];
  
  var searchDOM = function(node) {
  	// search doc.body classList for className
    if ( _.contains(node.classList, className) ) {
    	result.push(node);
    }
    // iterate through doc.body childNodes recursively
    _.each( node.childNodes, function( j ) {
  		searchDOM( j );
  	}); 
  };

  searchDOM(document.body);
  return result

};
