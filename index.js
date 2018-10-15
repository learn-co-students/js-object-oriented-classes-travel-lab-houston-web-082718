class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}



class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation.horizontal = beginningLocation.horizontal;
    this.beginningLocation.vertical = beginningLocation.vertical;

    this.endingLocation.horizontal = endingLocation.horizontal;
    this.endingLocation.vertical = endingLocation.vertical;
  }

  blocksTravelled() {
    let startingStreetBlock = this.beginningLocation.horizontal.match(/\d+/g); 
    let endingStreetBlock = this.endingLocation.horizontal.match(/\d+/g); 
    let startingAveBlock = this.beginningLocation.vertical;
    let endingAveBlock = this.endingLocation.vertical;
    
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    eastWest.forEach(block => {
      if (block === startingAveBlock) {
        startingAveBlock = block.indexOf(startingAveBlock)
      };
      if (block === endingAveBlock) {
        endingAveBlock = block.indexOf(startingAveBlock)
      };
    });

    let streetBlocks = abs(startingStreetBlock[0] - endingStreetBlock[0])
    let aveBlocks = abs(startingAveBlock - endingAveBlock)

    return streetBlocks + aveBlocks

  }
}
