const { generateFonts } = require('fantasticon');

generateFonts({
    inputDir: './icons/outline',
    outputDir: './icons',
    name: 'icons',
    fontTypes: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
    assetTypes: ['css', 'json', 'html'],
    pathOptions: {
        css: './icons/assets/icons.css',
        eot: './icons/fonts/icons.eot',
        html: './icons/assets/icons.html',
        json: './icons/assets/icons.json',
        svg: './icons/fonts/icons.svg',
        ttf: './icons/fonts/icons.ttf',
        woff: './icons/fonts/icons.woff',
        woff2: './icons/fonts/icons.woff2',
    },
    fontHeight: 300,
    tag: 'i',
    prefix: 'icon',
    fontsUrl: '../fonts'
}).then(results => {
    console.log(results);
});