function fbSwap() {
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get currrent node from the array
        var currentNode = selection.selectedNodes()[i];

        // Get it's name and element id
        var currNodeName = node.getName(currentNode);

        // Declare an empty var and assign it a string value based on if name has 'f' or 'b'
        // Big thank you to d.potekhin for teaching me about regex
        var newNodeName;
        if (currNodeName.match(/^f_/i)) {
            newNodeName = currNodeName.replace(/^f_/i, "b_");
        } else if (currNodeName.match(/^b_/i)) {
            newNodeName = currNodeName.replace(/^b_/i, "f_");
        }

        // Rename node/element with proper syntax
        switch (node.type(currentNode)) {
            case "PEG":
                node.rename(currentNode, newNodeName);
                break;

            // case "GROUP":
            //     node.rename(currentNode, "Deformation-" + newNodeName);
            //     break;

            case "READ":
                node.rename(currentNode, newNodeName);
                element.renameById(node.getElementId(currentNode), newNodeName);
                break;
        }
    }
}