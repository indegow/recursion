// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (_.isString(obj)) return '"' + obj + '"';
  if (_.isNumber(obj) || _.isBoolean(obj)) return obj.toString();
  if (obj === null) return 'null';
  if (_.isArray(obj)) {
  	var answer = [];
  	if (obj.length === 0) return '[]';
  	else {
  		for (var i = 0; i < obj.length; i++) {
  			answer.push(stringifyJSON(obj[i]));
  		}
  	}
  	return '[' + answer + ']';
  }
  if (_.isObject(obj)) {
  	if (_.isEmpty(obj)) return '{}';
  	var keys = _.keys(obj);
 	var numKeys = keys.length;
 	answer = '';
 	for (var i = 0; i < numKeys; i++) {
 		if (!_.isFunction(obj[keys[i]]) && obj[keys[i]] !== undefined) {
 			answer += '"' + keys[i] + '":' + stringifyJSON(obj[keys[i]]);
 			if (i < numKeys - 1) answer += ',';
 		}
 	}
 	return '{' + answer + '}';
  }
}
/*  var keys = _.keys(obj);
  var numKeys = keys.length;
  var stringAnswer = ""
  if (numKeys === 1) {
  	if (_.isString(obj[keys[0]])) return '"' + keys[0] + '": "' + obj[keys[0]] + '"';
  	if (_.isNumber(obj[keys[0]])) return '"' + keys[0] + '": "' + obj[keys[0]].toString() + '"';
  	if (_.isArray(obj[keys[0]])) return '"' + keys[0] + '": "' + obj[keys[0]].toString() + '"';
  	if (_.isObject(obj[keys[0]])) return '"' + keys[0] + '": "' + stringifyJSON(obj[keys[0]]);
  }
  return stringifyJSON(_.pick(obj, keys[0])) + stringifyJSON(_.omit(obj, keys[0])); */
