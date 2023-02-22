function countFrameSelection() {
    var number = Timeline.numFrameSel;
    var seconds = number / 24;
    var string;
    if (seconds > 1) {
        string = ' seconds'
    }else if (seconds <1) {
        string = ' of a second'
    }else if (seconds === 1) {
        string = ' second'
    }
    MessageBox.information(number + ' frames, or ' + seconds.toFixed(3) + string);

}
