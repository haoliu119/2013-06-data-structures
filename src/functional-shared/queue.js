var makeQueue = function(){
  // Use an object with numeric keys to store values
  var queue = {};
  queue._storage = {};
  queue._size = 0;

  // var storage = {};

  // var size = 0;

  // Implement the methods below
  // var queue = {};
  _.extend(queue, makeQueue.queueMethods);
  // debugger;
  return queue;
};

makeQueue.queueMethods = {};

makeQueue.queueMethods.enqueue = function(value){
  this._storage[this._size] = value;
  this._size++;
};

makeQueue.queueMethods.dequeue = function(){
  this._size && this._size--;
  var firstVar = this._storage[0];
  // debugger;
  // var keysArr = Object.keys(this._storage);
  // for(var i = 1; i < keysArr.length; i++){
  //   this._storage[i - 1] = this._storage[i];
  // }
  _.each(Object.keys(this._storage), function(item){
    this._storage[item] = this._storage[item + 1];
  }, this);
  delete this._storage[this._size];
  return firstVar;
};

makeQueue.queueMethods.size = function(){
  return this._size;
};