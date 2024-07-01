const fs = require('fs-extra')
const json = require('./flat_json')
const path = require('path')
/**
 * A helper class for reading the API specification from file and resolving all
 * references
 */
class Compiler {

  /**
   * Copy the JSON file with microcopy to `compiled`
   */
    write(source = './content/microcopy', target = './compiled/microcopy') {
    if (!fs.existsSync(source)){
       console.error(`The source directory does not exist: ${source}`)
       return;
    }
    
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    // Copy the JSON file
    fs.readdir(source, (err, files) => {
        if (err) {
            console.error(`An error occurred while reading the source directory: ${err}`);
            return;
        }

        files.forEach(file => {
            const sourceFilePath = path.join(source, file);
            const destinationFilePath = path.join(target, file);

            // Copy each file to the destination directory
            fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
                if (err) {
                    console.error(`An error occurred while copying the file ${file}: ${err}`);
                } else {
                    console.log(`File copied successfully from ${sourceFilePath} to ${destinationFilePath}`);
                }
            })
        })
    })
}
}
// export a new loader
module.exports = new Compiler()