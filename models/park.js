const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
};

Park.prototype.addCollectionOfDinosaurs = function (collectionOfDinosaurs) {
  this.collectionOfDinosaurs.push(collectionOfDinosaurs);
};

Park.prototype.addDinosaur = function (collectionOfDinosaurs) {
  this.collectionOfDinosaurs.push(collectionOfDinosaurs);
};

Park.prototype.removeDinosaurFromCollection = function (dinosaurToRemove) {
  const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaurToRemove);
  this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
};

module.exports = Park;
