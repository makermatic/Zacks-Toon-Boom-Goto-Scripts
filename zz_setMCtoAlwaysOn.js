function setMCToAlwaysOn() {
    // Loop across all selected nodes
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get the path in the current node from the array
        var currentNode = selection.selectedNodes()[i];

        // Check for node type before changing
        if (node.type(currentNode) == "MasterController") {

            // Change Attribute
            node.setTextAttr(currentNode, "showControlsMode", 1, "Always");

            MessageLog.trace(node.getName(currentNode) + " now has Controls Mode set to Always.");
        }
    }
}
