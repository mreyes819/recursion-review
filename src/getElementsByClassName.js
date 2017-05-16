// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let result = [];

  var getElementsByClass = function(node) {
    if (node.childNodes.length > 0) {
      getElementsByClass(node.childNodes);
      if (node.className === className) {
        result.push(node);
      }
    } else { 
      return;
    }

  };
  
  getElementsByClass(document.body);
  return result;
};



// GOAL: return a node list of nodes with className
// Get node list
  // check each nodes clas