function toggleCompMode() {
    // Loop across all selected nodes
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // For each node, get it's path
        var currentNode = selection.selectedNodes()[i];

        // Check if its a composite
        if (node.type(currentNode) == "COMPOSITE") {

            // Ref the existing mode
            var existingMode = node.getAttr(currentNode, 1, "compositeMode").textValue();

            // Change it accordingly, kinda like a bool
            if (existingMode == "Pass Through") {
                node.setTextAttr(currentNode, "compositeMode", 1, "As Bitmap");
            } else if (existingMode == "As Bitmap") {
                node.setTextAttr(currentNode, "compositeMode", 1, "Pass Through");
            } else {
                // Give an error if its neither Bitmap nor Passthrough
                var nodeName = node.getName(currentNode);
                MessageLog.error(nodeName + " is not currently set to Passthrough or Bitmap, it will be ignored.");
            }

            // Change the composite mode attribute and log it
            node.setTextAttr(currentNode, "attribute", frame.current(), "valueToSetTo");
            MessageLog.trace(existingMode);
        }
    }
}