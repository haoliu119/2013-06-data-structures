describe("stack", function() {
  var stack;
  var nameList = ['Hao', 'Zak', 'Alex', 'Bob'];

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should add pushed items to the top of the stack', function() {
    _.each(nameList, function(name){
      stack.push(name);
    });
    expect(stack.pop()).to.equal(_(nameList).last());
  });

  it('should remove popped items from the top of the stack', function() {

  });

  it('should push and pop multiple items in the right order (LIFO)', function() {
      stack.push('bob');// push bob
      stack.push('zak');// push zak
      expect(stack.pop()).to.equal('zak');// pop --> zak
      stack.push('hao');// push hao
      expect(stack.pop()).to.equal('hao');// pop --> hao
      expect(stack.pop()).to.equal('bob');// pop --> bob
      expect(stack.size()).to.equal(0);// size --> 0
  });

  it('should not error when popping from an empty stack', function() {
    expect(stack.pop()).to.equal(undefined);
    expect(stack.size()).to.equal(0);
  });

  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly
});
