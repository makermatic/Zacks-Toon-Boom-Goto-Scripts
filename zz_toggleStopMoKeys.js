function toggleStopMoKeys() {
    // Declare empty var
    var stopMo;

    // Get current value of stopMo then change it
    stopMo = preferences.getBool("SP_CONSTANT_SEGMENT", false);
    preferences.setBool("SP_CONSTANT_SEGMENT", !stopMo);

    // Get the new value and log it
    stopMo = preferences.getBool("SP_CONSTANT_SEGMENT", false);
    MessageLog.trace("Stop Mo Key value is now " + stopMo);
}
