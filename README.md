# SwitchAlbumJS

This app will take all your pictures and send them to a destination folder, no subfolders added.

To use it you will need node https://nodejs.org/en/download/ (I used 6.9.0 but should work with other versions)

usage :
On windows go to the directory where you downloaded albumMerge.js, Shift+Right click in that folder -> Open PowerShell window here 
Type this in powershell

`node .\albumMerge.js sourceFolder destinationFolder`

example: `node .\albumMerge.js D:\Album D:\Destination`

You need to be with your cmd/terminal in the forlder where the script is
`sourceFolder` is the folder where the pictures are example : D:\Album
`destinationFolder` is an optional parameter, if not specified or has an invalid format it, the default will be Desktop/AFolder (should work on ubuntu). Is the folder doesn't exist it will be created.
