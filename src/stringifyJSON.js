// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (typeof obj === 'boolean') {
    return `${obj}`;
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    let string = Array.from(obj).map(el => stringifyJSON(el));
    return `[${string}]`;
  } else if (typeof obj === 'object' && obj) { 
    var arr = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      arr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    //console.log('{' + arr.join('') + '}');
    return '{' + arr.join(',') + '}';    //join array 

    // let string = Array.from(obj).map()
    // let string = Array.from(obj).map((key, prop) => `\"${prop}\":${stringifyJSON(prop[key])}`);
    //let string = Array.from(obj).map((key, prop) => console.log(key,prop));
    

    //console.log(obj);
    
    // let string = _.map(Array.from(obj), (prop, key) => `\"${prop}\":stringifyJSON(${key})`);
  }
  
  
};
