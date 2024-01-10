let myObj = {
  name: "amit",
  age: 23,
  
};

myObj.getKeys=function () {
  	let arr = [];
      for (let key in this) {
        arr.push(key);
      }
      return arr;
  }
	