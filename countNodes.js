function countNodes() {
    // Get all selected nodes as an array
    var nodes = selection.selectedNodes();

    // Store the array length in a variable
    var number = nodes.length;

    // Print to popup
    MessageBox.information(number + " nodes");
}