// the first 2 arguments are the location of 
//node and the name of the script
// so the third argument is the location of the folder
// the fourth argument is option and represents the destionation folder
//if the destionation is not specified then tthe default is 'OnePlace' folder from desktop
let fs = require('fs');
//validate the source folder
const sourceFolder = process.argv[2];
if (!sourceFolder || !fs.existsSync(sourceFolder)) {
    consolelog('The source folder is invalid');
    process.exit();
}
//validate the destination folder
let destionationFolder = process.argv[3];
if (!destionationFolder) {
    destionationFolder = require('path').join(require('os').homedir(), 'Desktop') + '\\OnePlace'
}
if (!fs.existsSync(destionationFolder)) {
    fs.mkdirSync(destionationFolder);
}

let walkSync = function (dir,filelist) {
    files = fs.readdirSync(dir);
   
    files.forEach(function (file) {
        if (fs.statSync(dir + '\\' + file).isDirectory()) {
            filelist = walkSync(dir + '\\' + file, filelist);
        }
        else {
            console.log(`Trying to copy ${file} to ${destionationFolder}`)
            fs.copyFileSync(dir + '\\' + file, destionationFolder + '\\' + file, (err) => {
                if (err) { console.log(err); throw err; }
                console.log('source.txt was copied to destination.txt');
            });
            filelist.push(file);
        }
    });
    return filelist;
};

let getFilesFromDir = function (dir) {
    let start = new Date();
    walkSync(dir, []);
    let end = new Date() - start;
    console.log(`All files from ${sourceFolder} have been copied to ${destionationFolder} in ${end} milliseconds`);

};
getFilesFromDir(sourceFolder);

