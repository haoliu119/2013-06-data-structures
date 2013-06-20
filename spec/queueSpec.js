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

  // dequeuing an empty queue will return undefined, and size should be zero
  it('should return undefined when dequeuing an empty queue', function(){
    expect(queue.dequeue()).to.equal(undefined);
    expect(queue.size()).to.equal(0);
  });

  // after dequeuing one element, size should decrease by one
  it('should decrease size by one after dequeuing an element', function(){
    queue.enqueue('birds');
    var tempSize = queue.size();
    queue.dequeue();
    expect(queue.size()).to.equal(tempSize - 1);
  });

  // dequeuing should return the value reference by key 0
  it('should return the first value in the queue', function(){
    queue.enqueue('Hao');
    expect(queue.dequeue()).to.equal('Hao');
    expect(queue.size()).to.equal(0);
  });
});
