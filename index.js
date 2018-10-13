class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  blocksTravelled() {
    return this.end.vertical - this.start.vertical + ((this.start.horizontal === this.end.horizontal) ? 0 : 4);
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
