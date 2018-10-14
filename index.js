class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(endDate) {
        return endDate - this.startDate.getFullYear(this.startDate);
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        let hStart = eastWest.indexOf(this.beginningLocation.horizontal);
        let hEnd = eastWest.indexOf(this.endingLocation.horizontal);
        let vStart = parseInt(this.beginningLocation.vertical);
        let vEnd = parseInt(this.endingLocation.vertical);

        return Math.abs(hStart - hEnd) + Math.abs(vStart - vEnd);
    }

    estimatedTime(peak = false) {
        if (peak) {
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }
    }
}
