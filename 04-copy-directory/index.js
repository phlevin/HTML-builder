const fs = require('fs');
const path = require('path');

const pathToFolder = path.join(__dirname, 'files');
const pathToFolderCopy = path.join(__dirname, 'files-copy');

function copyDir(folder, folderCopy) {
  fs.readdir(folder, (error, files) => {
    files.forEach((file) => {
      fs.readFile(path.join(folder, file), 'utf-8', (error, data) => {
        if (error) {
          throw error;
        }
        fs.mkdir(folderCopy, { recursive: true }, () => {
          fs.writeFile(path.join(folderCopy, file), data, (error) => {
            if (error) {
              throw error;
            }
          });
        });
      });
    });
  });
}

copyDir(pathToFolder, pathToFolderCopy);
