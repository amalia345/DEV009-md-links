const{ mdLinks } = require( './index.js');
const c = require('ansi-colors');


let path1 = '../DEV009-md-links/index.js'
let path2 = '../DEV@09-mh-links/index.jgs'
let path3 = '../DEV009-md-links/myFile.md'

mdLinks(path3,false)
.then((links)=>{
    if (links && links.length >0 ){
        console.log(c.bgGreen('The file exists and its an markdown file, here is the info from the array:'));
        links.forEach((link) => {
            console.log(c.bgBlue(`Text: ${link.text}`)+ '   '+c.bgCyanBright(`Href ${link.href} `)+ '   '+c.bgYellow(`path  ${link.file}`));
        });

        // DEL NUEVO ARRAY CEHCAR CON UN CICLO SI LOS LINKS FUNCIONAN O NO
    } else {
        console.log(c.bgMagenta('The file exist but is not a markdown file'));
    }
})
.catch((error)=> {
    console.log(c.bgRed(error));
});

