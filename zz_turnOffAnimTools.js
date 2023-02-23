function turnOffAnimTools() {
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        var currentNode = selection.selectedNodes()[i]; //Get path of the Node

        var animTools = node.getAttr(currentNode, 1, "canAnimate"); //Reference anim tools for MessageLog

        if (node.type(currentNode) == "READ") {
            node.setTextAttr(currentNode, "canAnimate", 1, "false"); //Change it

            MessageLog.trace(node.getName(currentNode) + " has Animate with Animation Tools set to " + animTools.boolValue() + "."); // Log it
        }
    }
}
