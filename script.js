// let myObj = {
//   name: "amit",
//   age: 23,
  
// };

// myObj.getKeys=function () {
//   	let arr = [];
//       for (let key in this) {
//         arr.push(key);
//       }
//       return arr;
//   }
const student = {
    name: "John Doe"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
    // Use Object.keys to get an array of all keys in the object
    return Object.keys(this);
};
	