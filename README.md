# Zack's Toon Boom Go-To Scripts

## Introduction

These are scripts I made that I use all the time in Toon Boom Harmony. It's fully open source, go nuts! They've made working in Toon Boom way way faster and I hope they can do the same for you!

If I make more of these scripts, I'll definitely add them here for sure!

## What does Each Script Do

1. `quickRename` - Opens a popup that let's you rename as many selected nodes in one place, even drawings.
2. `renameMaster-P` - Same as `quickRename`, except it also adds `master-P` after the name you input (pegs only). 
   - Example: If you input "clown,"  the peg will be renamed to `clown_master-P`.
3. `addXSub` - Adds a drawing sub named `x` to each selected drawing (element).
4. `fbSwap` - toggles between `b` and `f` on selected pegs and drawings. In other words, it changes f_arm to b_arm in seconds rather than minutes
5. `toggleOpacity` - Toggles the opacity of selected drawings back and forth between 50 and 100.
6. `toggleCompositeMode` - Toggles selected composites between bitmap and passthrough.
7. `toggleStopMoKeys` - When run, it will toggle Stop-Motion Keys on or off in settings. In the Message Log you'll be able to see whether Stop-Mo Keys was turned on or off. 
8. `turnOffAnimTools` - Toggles `Animate with Animation Tools` off on selected drawings, just in case you didn't change the default value in preferences.
9. `setMCtoAlwaysOn` - Toggles "Show Controls Mode" to `Always` on selected Master Controllers.
10. `countFrameSelection` - If you select a range of frames in the timeline and run the script, a pop up will show the number of frames selected and how many seconds it is. 
11. `countnodes` - Displays a pop up that shows the number of nodes selected.
12. `coinFlip` - Self explanatory. When the flip is done, it'll show a pop-up with the result.
13. `bakeNames` - Renames a selected node to whatever it is attached to or from, depending on which function you use:
    1. `bakeBelow()` - Renames the node based on the **peg** *above* it.
    2. `bakeAbove()` - Renames the node based on the **drawing** *below* it.


## Quick Installation without Icons

1. Click on the green Code button and select `Download Zip`.
2. Extract the folder somewhere safe.
3. In Toon Boom's Script Editor, click on the ![image-20220210095647372](https://i.ibb.co/pnYPM7n/image-20220210095647372.png) icon.
4. Double click on whichever script you want to import.
   - PRO TIP: If you select the top-most script, hold down `shift`, and select the bottom-most script, you can import all of them at once

## How to add Buttons  to any Window

1. In any of the main windows, right click on the empty top grey bar and select `Customize`.
2. In the search bar, search for the script you want to add.
3. Select the script you want to add, it should look like `Script: scriptName in scriptName.js`.
5. Click on the ![image-20220210100932962](https://i.ibb.co/2K3L7n9/image-20220210100932962.png) icon to add it to your timeline :smile:.
