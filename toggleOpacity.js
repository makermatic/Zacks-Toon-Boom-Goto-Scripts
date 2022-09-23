function toggleOpacity() {
    for (i = 0; i < selection.numberOfNodesSelected(); ++i) {
        // Get currrent node from the array
        var currentNode = selection.selectedNodes()[i]; //Get path of the Node
        var opacity = node.getAttr(currentNode, 1, "opacity"); //Reference the attribute
        var opacityValue = opacity.doubleValue(); //Retrieve it's value

        var newValue;

        if (opacityValue === 100) { //assign newValue based on Opacity value
            newValue = 50;
        } else {
            newValue = 100;
        }

        node.setTextAttr(currentNode, "opacity", 1, newValue);
    }
}