function addXsub() {
    // Iterate on each node selected
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get currrent node path and element ID from the array
        var currentNode = selection.selectedNodes()[i];
        var currNodeID = node.getElementId(currentNode);

        // Check if it's a drawing and if not proceed
        if (node.type(currentNode) == "READ") {
            Drawing.create(currNodeID, "x", true, true); //the fourth argument is optional but it ensures that it actually creates the sub inside the elements folder
            MessageLog.trace(node.getName(currentNode) + " has been given an 'x' sub");
        }
    }
}