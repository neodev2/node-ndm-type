
// way 1: http://stackoverflow.com/a/41032560/5638869

/*type1 = function(name) {
	let obj = {};
	obj.object = 'object Object'
	obj.array = 'object Array'
	obj.string = 'object String'
	obj.boolean = 'object Boolean'
	obj.number = 'object Number'
	obj.type = Object.prototype.toString.call(name).slice(1, -1)
	obj.name = Object.prototype.toString.call(name).slice(8, -1)
	obj.is = (ofType) => {
		ofType = ofType.toLowerCase();
		return (obj.type === obj[ofType])? true: false
	}
	obj.isnt = (ofType) => {
		ofType = ofType.toLowerCase();
		return (obj.type !== obj[ofType])? true: false
	}
	obj.error = (ofType) => {
		throw new TypeError(`The type of ${name} is ${obj.name}: `
							+`it should be of type ${ofType}`)
	}
	return obj;
};*/


// way 2: http://stackoverflow.com/a/11231664/5638869

//var type = (function(global){
module.exports = (function(global){
	
	var cache = {};
	
	return function(obj){
		
		var key;
		return obj === null ? 'null' // null
		: obj === global ? 'global' // window in browser or global in nodejs
		: (key = typeof obj) !== 'object' ? key // basic: string, boolean, number, undefined, function
		: obj.nodeType ? 'object' // DOM element
		: cache[key = ({}).toString.call(obj)] // cached. date, regexp, error, object, array, math
		|| (cache[key] = key.slice(8, -1).toLowerCase()); // get XXXX from [object XXXX], and cache it
		
	};
	
}(this));