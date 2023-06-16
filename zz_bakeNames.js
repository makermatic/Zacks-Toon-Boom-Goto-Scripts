function bakeBelow() {
    // Loop across all selected nodes
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get the path in the current node from the array
        var currentNode = selection.selectedNodes()[i];

        // Get its parent's path and name
        var parentNode = node.srcNodeInfo(currentNode, 0).node;
        var parentName = node.getName(parentNode);

        // Check the node type
        if (node.type(parentNode) == "PEG") {
            var newName;

            // If it matches
            if (parentName.match(/-P/i)) {
                // Remove the -P syntax and rename curretNode and its element
                newName = parentName.replace(/-P/i, "");
                node.rename(currentNode, newName);
                element.renameById(node.getElementId(currentNode), newName);
            } else {
                MessageBox.critical("The peg doesn't have the proper syntax :(");
            }
        } else {
            MessageBox.critical("The selected node isn't a peg.")
        }
    }
}

function bakeAbove() {
    // Loop across all selected nodes
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get the path in the current node from the array
        var currentNode = selection.selectedNodes()[i];

        // Get its child's path and name
        var childNode = node.dstNodeInfo(currentNode, 0, 0).node;
        var childName = node.getName(childNode);

        // Check the node type
        if (node.type(childNode) == "READ") {
            node.rename(currentNode, childName + "-P");
        } else {
            MessageBox.critical("The selected node isn't a drawing.")
        }
    }
}