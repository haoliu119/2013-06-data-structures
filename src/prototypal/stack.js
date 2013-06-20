var Stack = function() {
  var stack = Object.create(Stack.stackMethods);

  stack._storage = {};

  stack._size = 0; // Hint: set an initial value here
  return stack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Stack.stackMethods.pop = function(){
  this._size && this._size--;
  var stackTop = this._storage[this._size];
  delete this._storage[this._size];
  return stackTop;
};

Stack.stackMethods.size = function(){
  return this._size;
};