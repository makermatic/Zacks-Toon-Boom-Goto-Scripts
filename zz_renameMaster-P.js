function renameMasterPeg() {
    var d = new Dialog;

    d.title = "Rename Master Peg"

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
        for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
            // Get currrent node from the array
            var currentNode = selection.selectedNodes()[i];

            // Rename, and add a "-P" to the end if selected node is a Peg
            if (node.type(currentNode) == "PEG") {
                node.rename(currentNode, inputData + "_master-P");
                MessageLog.trace("The selected node(s) have been renamed to " + inputData);
            }
        }
    }
}