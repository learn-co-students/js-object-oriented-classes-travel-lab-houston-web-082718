let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Driver {
    constructor (name, date) {
        this.name = name,
        this.startDate = new Date(date)
    }
    yearsExperienceFromBeginningOf(year) {
        let exp = year - this.startDate.getFullYear()
        return exp
    }
}

class Route {
    constructor (beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation,
        this.endingLocation = endingLocation
    }
    streetToNumber(street) {
        return eastWest.indexOf(street)
    }
    blocksTravelled() {
        let hDistance = (this.streetToNumber(this.endingLocation.horizontal)) - (this.streetToNumber(this.beginningLocation.horizontal))
        let vDistance = (this.endingLocation.vertical - this.beginningLocation.vertical)
        return hDistance + vDistance
    }
    estimatedTime(peak) {
        if (peak) {
            return Math.ceil(this.blocksTravelled() / 2)
        } else {
            return Math.ceil(this.blocksTravelled() / 3)
        }
    }
}
