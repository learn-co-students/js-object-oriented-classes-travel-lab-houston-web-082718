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
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  aveToInt(ave) {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    return eastWest.indexOf(ave)
  }

  blocksTravelled() {
    let streetBlocks =
    this.beginningLocation.vertical.match(/\d+/g) -
    this.endingLocation.vertical.match(/\d+/g); 

    let aveBlocks =
      this.aveToInt(this.beginningLocation.horizontal) - 
      this.aveToInt(this.endingLocation.horizontal); 
    
    return Math.abs(streetBlocks)+ Math.abs(aveBlocks)

  }

  estimatedTime(peakTime) {
    if (peakTime) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    } 
  }
}
