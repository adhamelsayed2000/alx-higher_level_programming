class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {}; // Create an empty object if w or h is not a positive integer or equal to 0
    }
    this.width = w;
    this.height = h;
  }
}
module.exports = Rectangle;
