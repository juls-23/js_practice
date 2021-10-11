function MyArray(){
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}


function MyArrayProto(){
  this.push = function(){ 
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  this.pop = function(){
    if(this.length===0){
      return;
    }
    const item = this[--this.length];
    delete this[this.length];
    return item;
  }
  this.forEach = function(func){
    for(let i=0; i<this.length;i++){
      func(this[i]);
    }
  }
  this.some = function(func){
    for(let i=0; i<this.length; i++){
      if(func(this[i])){
        return true;
      }
    }
    return false;
  }
  this.every = function(func){
    for(let i=0; i<this.length; i++){
      if(func(this[i])===false){
        return false;
      }
    }
    return true;
  }
  this.filter = function(func){
    const result = new MyArray();
    for(let i=0; i<this.length; i++){
      if(func(this[i])){
        result.push(this[i]);
      }
    }
    return result;
  }

  this.map = function(func){
    const res = new MyArray();
    for(let i=0; i<this.length; i++){
      res.push(func(this[i]))
    }
    return res;
  }

  this.shift = function(){
    const elem = this[0];
    for(let i=1; i<this.length; i++){
      this[i-1] = this[i] 
    }
    delete this[--this.length]
    return elem;
  }

  this.unshift = function(argument) { 
    const startLength = this.length; 
    const addLength = arguments.length    
    this.length += addLength;
    const newLength = --this.length;
      for(let i=newLength; i>=addLength; --i){
       this[i] = this[i-addLength]; 
      } 
    for(let i = 0; i<addLength; i++){
     
     this[i] = arguments[i];  
    }
    return  ++this.length;  
  }


  this.reverse = function(){
    const reverseArr = new MyArray;
    let lenth = this.length;

    for(let i=0; i<this.length; i++){
      reverseArr.push(this[--lenth])
      
    } 
    for(let i=0; i<this.length; i++){
      this[i] = reverseArr[i]
    }
      
    return  this;
    
  }

  this.concat = function(arr){
    const concatArr = new MyArray;
    for(i=0; i<this.length; i++){
      concatArr.push(this[i])
    }
    for(i=0; i<arr.length; i++){
      concatArr.push(arr[i])
    }
    return  concatArr;
  }

}


MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(2,4,5,8);



const arrNew = [2,3,4,7,5,4,9];


// console.log(myArray)
// console.log(myArray.map(mult));
// console.log(myArray.reverse())
// console.log(myArray.shift())
// console.log(myArray.unshift(4,5,6,7))
// const newNew = myArray.concat(arrNew);
// console.log(newNew)

// function mult(n) {
//   return n*2
// }



