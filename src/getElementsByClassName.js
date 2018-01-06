// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var nodeList = [];
  function traverse (node) {
  	if (_.contains(node.classList, className)) {
  		nodeList.push(node);
  	}
  	_.forEach(node.childNodes, function(childNode) {traverse(childNode);});
  }
  traverse(document.body);
  return nodeList;
}
