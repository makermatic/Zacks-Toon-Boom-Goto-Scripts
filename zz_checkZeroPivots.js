function checkZeroPivots() {
    // Initialize an empty array
    var zeroPivotNodes = [];

    // Loop across all selected nodes
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get the path in the current node from the array
        var currentNode = selection.selectedNodes()[i];

        // Keep running script as long as currentNode is a Peg
        if (node.type(currentNode) == "PEG") {
            // Obtain pivots
            var pivotX = node.getAttr(currentNode, frame.current(), "pivot.x").doubleValue();
            var pivotY = node.getAttr(currentNode, frame.current(), "pivot.y").doubleValue();

            if (pivotX === 0 && pivotY === 0) {
                zeroPivotNodes.push(node.getName(currentNode));
            }
        }
    }

    // Report all the nodes caught into the array
    for (i = 0; i < zeroPivotNodes.length; ++i) {
        if (zeroPivotNodes.length === 0) {
            MessageBox.warning("No Pegs were Selected.");
        } else {
            MessageLog.trace(zeroPivotNodes);
        }
    }
}