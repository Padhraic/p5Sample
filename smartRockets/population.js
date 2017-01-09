function Population() {
  this.rockets = [];
  this.popsize = 100;
  this.matingPool = [];

  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  this.evaluate = function() {
    var maxfit = 0;
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }
    for (i = 0; i < this.rockets.length; i++) {
      this.rockets[i].fitness /= maxfit;
    }
    this.matingPool = [];
    for (i = 0; i < this.rockets.length; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingPool.push(this.rockets[i]);
      }
    }
    createP(maxfit);
  };

  this.selection = function() {
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.matingPool);
      var parentB = random(this.matingPool);
      var child = parentA.dna.crossover(parentB.dna);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
  };

  this.run = function() {
    for (var i = 0; i < this.rockets.length; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  };

}
