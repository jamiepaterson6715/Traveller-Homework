const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
}

// Cinema.prototype.filmTitles = function() {
//   return this.films.map(film => film.title);
// };

Traveller.prototype.getJourneyEndLocations = function () {
      return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function(transport) {
      return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function(distance) {
  return this.journeys.filter((journey) => {
     return journey.distance >= distance;
});
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce( (total, journey) => total+=journey.distance,0)
};



Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
