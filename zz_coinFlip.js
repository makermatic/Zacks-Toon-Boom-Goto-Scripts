function coinFlip() {
    var sides = ['heads!', 'tails!'];
    var result = sides[Math.floor(Math.random() * sides.length)];

    MessageBox.information("It's " + result);
}
