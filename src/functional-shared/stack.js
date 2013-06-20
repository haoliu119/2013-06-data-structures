var makeStack = function(){
  // Use an object with numeric keys to store values
  var stack = {};

  stack._storage = {};

  stack._size = 0; // Hint: set an initial value here
  _(stack).extend(makeStack.stackMethods);
  // Implement the methods below
  return stack;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

makeStack.stackMethods.pop = function(){
  this._size && this._size--;
  var stackTop = this._storage[this._size];
  delete this._storage[this._size];
  return stackTop;
};

makeStack.stackMethods.size = function(){
  return this._size;
};
