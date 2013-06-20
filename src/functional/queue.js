var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  queue.dequeue = function(){
    size && size--;
    var firstVar = storage[0];
    var keysArr = Object.keys(storage);
    for(var i = 1; i < keysArr.length; i++){
      storage[i - 1] = storage[i];
    }
    delete storage[size];
    return firstVar;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};


