describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('size method should return zero for an empty queue', function(){
    expect(queue.size()).to.equal(0);
  });

  // after enqueuing one element, size should increase by one
  it ('should increase size by one after enqueuing one element', function(){
    queue.enqueue('first');
    expect(queue.size()).to.equal(1);
  });
  // enqueing will add another key/value pair to the end of object
  it ('should add another key/value pair to the end of the object after enqueuing', function(){
    var first = "first";
    queue.enqueue(first);
    expect(queue[queue.size() - 1]).to.equal(first);
  });

  // dequeuing an empty queue will return undefined
  it('should return undefined when dequeuing an empty queue', function(){
    expect(queue.dequeue()).to.equal(undefined);
  });

  // after dequeuing one element, size should decrease by one
  it('should decrease size by one after dequeuing an element', function(){
    queue.enqueue('birds');
    var temp = queue.size();
    queue.dequeue();
    expect(queue.size()).to.equal(temp - 1);
  });

  // dequeuing should return the value reference by key 0
  it('dequeuing should return the value referenced by key 0',function(){
    queue.enqueue('zero');
    queue.enqueue('first');
    queue.dequeue();
    expect(queue[0]).to.equal('first');
  });
  // dequeuing should remove the value referenced by key 0


  // Hey! Add tests here that thoroughly test the functionality of your queue
});
