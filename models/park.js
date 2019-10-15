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

Park.prototype.dinosaurWithMostVisitors = function () {
  for(const dinosaur of this.collectionOfDinosaurs);{
  mostVisitors = (Math.max(this.guestsAttractedPerDay))
}
  return mostVisitors;
};

module.exports = Park;
