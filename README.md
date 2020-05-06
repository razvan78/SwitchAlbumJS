
# SwitchAlbumJS RO

Aplicatia aceasta va lua toate pozele si clipurile facute de nintendo si le va pune intr-un singur loc

ca sa folositi aplicatia aveti nevoie de Node.js https://nodejs.org/en/download/ (eu folosesc 6.9.0 dar ar trebui sa mearga si cu alte versiuni)

Cum sa folositi scriptul :
In windows mergi in locul in care ai descarcat albumMerge.js, Shift+Right click in folder, nu pe fisier -> Open PowerShell window here 

In powershell scrii asta: 

`node .\albumMerge.js sourceFolder destinationFolder`

exemplu: `node .\albumMerge.js D:\Album D:\Destination`

`sourceFolder` este folderul in care ai descarcat pozele de pe nintendo

`destinationFolder` e optional, daca nu specifici unde sa puna fisierele atunci o sa creeze un folder numit AFolder pe desktop si o sa le puna acolo


# SwitchAlbumJS EN

This app will take all your pictures and send them to a destination folder, no subfolders added.

To use it you will need node https://nodejs.org/en/download/ (I used 6.9.0 but should work with other versions)

usage :
On windows go to the directory where you downloaded albumMerge.js, Shift+Right click in that folder -> Open PowerShell window here 
Type this in powershell

`node .\albumMerge.js sourceFolder destinationFolder`

example: `node .\albumMerge.js D:\Album D:\Destination`

You need to open cmd/terminal in the foler where the script is

`sourceFolder` is the folder where the pictures are, example : D:\Album

`destinationFolder` is an optional parameter, if not specified or has an invalid format it, the default will be Desktop/AFolder (should work on ubuntu). Is the folder doesn't exist it will be created.
