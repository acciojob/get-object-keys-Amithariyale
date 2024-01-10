let student = {
  name: "amit",
  age: 23,
 
};

Object.prototype.getKeys=function () {
      let arr = [];
      for (let key in this) {
        arr.push(key);
      }
      return arr;
    },

	