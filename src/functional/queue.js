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
    _.each(Object.keys(storage), function(item){
      storage[item] = storage[item + 1];
    });
    delete storage[size];
    return firstVar;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};


