class Driver {
    // A driver can be initialized with a name, and a string representing the day 
    // that he joined Scuber.
    constructor(name, startDate) {
        this.name = name;
        // startDate — returns a JavaScript Date object.
        this.startDate = new Date(startDate);
    }
    
    // yearsExperienceFromBeginningOf — takes an argument of a year and returns the number of years 
    // since the driver's startDate.
    yearsExperienceFromBeginningOf(year) {
        const beginningOfYear = new Date(year, 1, 1)
        return Math.floor((beginningOfYear - this.startDate) / (1000 * 60 * 60 * 24 * 365))
    }
}

class Route {
    // A route is initialized with two arguments, a beginningLocation and an endingLocation. 
    // Both of these arguments are JavaScript objects with an attributes of horizontal and vertical.
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    // blocksTravelled — returns an integer with the number of blocks travelled. 
    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        return Math.abs(eastWest.findIndex((element) => element === this.endingLocation.horizontal) 
                - eastWest.findIndex((element) => element ===this.beginningLocation.horizontal)) 
            + Math.abs(parseInt(this.endingLocation.vertical) 
                - parseInt(this.beginningLocation.vertical));
    }

    // estimatedTime — The method returns the number of minutes estimated for the trip. The estimated 
    // time depends on the distance in blocks and whether the trip is occurring during peak hours or 
    // off peak hours. During off peak hours, a driver travels three blocks in a minute, while during 
    // peak hours a driver travels an estimated two blocks in a minute.
    estimatedTime(booleanPeakHour) {
        if (booleanPeakHour)
            return this.blocksTravelled() / 2;
        else
            return this.blocksTravelled() / 3;
    }
}