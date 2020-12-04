const { generateFonts } = require('fantasticon');

generateFonts({
    inputDir: './icons/converted',
    outputDir: './icon-test',
    name: 'icons',
    fontTypes: ['ttf', 'woff', 'woff2'],
    assetTypes: ['css', 'json', 'html'],
    formatOptions: {
        svg: { ascent: 0.5 },
    },
    pathOptions: {
        css: './icon-test/icons.css',
        html: './icon-test/icons.html',
        json: './icon-test/icons.json',
        ttf: './icon-test/fonts/icons.ttf',
        woff: './icon-test/fonts/icons.woff',
        woff2: './icon-test/fonts/icons.woff2',
    },
    fontHeight: 300,
    selector: null,
    tag: 'i',
    prefix: 'icon',
    fontsUrl: 'fonts'
}).then(results => console.log(results));