function quickRename() {
    var d = new Dialog;

    d.title = "Quick Rename"

    // Label
    var label = new Label();
    label.text = " Rename:";
    d.add(label);

    d.addSpace(10);

    // Input Widget
    var input = new LineEdit();
    input.label = null;
    d.add(input);

    d.addSpace(15);

    if (d.exec()) {
        var inputData = input.text;
        renameNodes(inputData);
    }
}

function renameNodes(newName) {
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get currrent node from the array
        var currentNode = selection.selectedNodes()[i];

        // Rename, and add a "-P" to the end if selected node is a Peg
        if (node.type(currentNode) == "PEG") {
            node.rename(currentNode, newName + "-P");
        } else {
            node.rename(currentNode, newName);
        }
    }

    MessageLog.trace("The selected node(s) have been renamed to " + newName);
}