# SwitchAlbumJS
We all know how annying is to see all the pictures/videos taken by nintendo switch, you have to open 3 layers of subfolders to see your print screen, but no more.

This app will take all your pictures and send them to a destination folder, no subfolders added.

To user it you will need node (I used 6.9.0 but should work with other versions)

usage :
`node ./bringToOnePlace.js sourceFolder destinationFolder`

You need to be with your cmd/terminal in the forlder where the script is
`sourceFolder` is the folder where the pictures are
`destinationFolder` is an optional parameter, if not specified or has an invalid format it, the default will be Desktop/OnePlace (should work on ubuntu). Is the folder doesn't exist it will be created.
