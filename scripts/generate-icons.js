const fontkit = require('fontkit-next');
const { generateFonts } = require('fantasticon');

generateFonts({
    inputDir: './icons/raw',
    outputDir: './icon-test',
    name: 'icons',
    fontTypes: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
    assetTypes: ['css', 'json', 'html'],
    pathOptions: {
        css: './icon-test/icons.css',
        eot: './icon-test/fonts/icons.eot',
        html: './icon-test/icons.html',
        json: './icon-test/icons.json',
        svg: './icon-test/fonts/icons.svg',
        ttf: './icon-test/fonts/icons.ttf',
        woff: './icon-test/fonts/icons.woff',
        woff2: './icon-test/fonts/icons.woff2',
    },
    fontHeight: 300,
    tag: 'i',
    prefix: 'icon',
    fontsUrl: 'fonts'
}).then(results => {
    const { codepoints, ...rest } = results;
    const font = fontkit.openSync('./icon-test/fonts/icons.ttf');
    const glyphs = {};

    Object.keys(codepoints).map((name, i) => {
        const codepoint = codepoints[name];
        glyphs[name] = font.glyphForCodePoint(codepoint);
    });

    console.log(glyphs);
});