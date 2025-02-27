#!/usr/bin/env node
const { mdLinks } = require('./index.js');
const c = require('ansi-colors');

let info = process.argv
let path = info[2]
let validate = info.includes('--validate')
let stats = info.includes('--stats')

if (stats) {
    let polo 
    if (stats && validate) {
        mdLinks(path, true).then((links) =>{

            let totalLinks = links.length
            console.log(`Total links: ${totalLinks}`);
            let validated = links.filter(link => link.status >= 200 && link.status <=299).length
            console.log("Total Valid Links:  " + validated);
            console.log(`Total Invalid Links: ${totalLinks-validated}`);
        })
    }
    else{
        mdLinks(path, false).then((links) =>{
            console.log(`Total links: ${links.length}`);
            const uniques = new Set(links.map(link => link.href)).size;
            console.log(`Unique links: ${uniques}`);
        })
    }
}else{
    
mdLinks(path, validate)
.then((links) => {
    if (links && links.length > 0) {
        console.log(c.bgGreen('Promise response recieved'));
        if (links[0].status) {

            links.forEach((link) => {
                let texty = c.bgBlue(`Text:`) + ` ${link.text}   `
                let hrefy = c.bgBlue(`Href:`) + ` ${link.href} `
                let pathy = c.bgBlue(`path:`) + ` ${link.file}  `
                let statusy;
                if (link.status >= 200 && link.status <= 399) {
                    statusy = c.bgGreen(`Status ${link.status}`);
                } else {
                    statusy = c.bgRed(` Status ${link.status}`);
                }
                let messagy = c.yellow(`Message ${link.statusText}`)

                console.log(texty + hrefy + pathy + statusy +'  '+ messagy + ' \n ');
            });
        } else {
            links.forEach((link) => {
                console.log(c.bgBlue(`Text: ${link.text}`) + '   ' + c.bgCyanBright(`Href ${link.href} `) + '   ' + c.bgYellow(`path  ${link.file}`));
            });
        }
    } else {// DEL NUEVO ARRAY CEHCAR CON UN CICLO SI LOS LINKS FUNCIONAN O NO
        console.log(c.bgMagenta('The file exist but is not a markdown file'));
    }
})
.catch((error) => {
    console.log(c.bgRed(error));
});
}
