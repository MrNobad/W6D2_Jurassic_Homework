const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('DoYouThinkHesaurus Park', 15.50, ['Frank', 'Betty', 'Megasorearse']);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'DoYouThinkHesaurus Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15.50);
  });

  it('should have a collection of dinosaurs', function(){
    park.addCollectionOfDinosaurs('Frank');
    park.addCollectionOfDinosaurs('Betty');
    park.addCollectionOfDinosaurs('Megasorearse');
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['Frank', 'Betty', 'Megasorearse']);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Doyouthinkhesawrus');
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['Doyouthinkhesawrus']);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.addCollectionOfDinosaurs('Frank');
    park.addCollectionOfDinosaurs('Betty');
    park.addCollectionOfDinosaurs('DoYouThinkHesaurus');
    park.removeDinosaurFromCollection('Doyouthinkhesawrus');
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['Frank', 'Betty'])

  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
