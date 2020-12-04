// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/icon-color.modifier';
import sizeModifier from './modifiers/icon-size.modifier';

// Icons JSON
import IconsJSON from '../../../icon-test/icons.json';

// Fonts
const fonts = {
    eot: require(`../../../icon-test/fonts/icons.eot`),
    svg: require(`../../../icon-test/fonts/icons.svg`),
    ttf: require(`../../../icon-test/fonts/icons.ttf`),
    woff: require( `../../../icon-test/fonts/icons.woff`),
    woff2: require(`../../../icon-test/fonts/icons.woff2`)
}

const fontFace = `
@font-face {
	font-family: 'icons';
	src: url('${fonts.eot}#iefix') format('embedded-opentype'),
		url('${fonts.woff2}#icons') format('woff2'),
		url('${fonts.woff2}') format('woff'),
		url('${fonts.ttf}') format('truetype'),
		url('${fonts.svg}') format('svg');
}
`;

const IconStyles = (params) => {
	const { framework, props } = params;
    const { color, name, size } = props;
    const vars = getComponentVars('icon');
	const wrapper = framework === 'angular' ? '.fab-icon' : '&';

    if (!IconsJSON[name]) {return ''; }

    return `
        ${fontFace}
        
        & { display: inline-block; }
        
        ${wrapper} {
            font-family: icons!important;
            font-size: ${vars.fontSize};
            font-style: normal;
            font-weight: normal!important;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            &:before {
                content: '\\${String.fromCharCode(IconsJSON[name])}'
            }
        }

        // Modifiers
        ${color ? colorModifier(params) : ''}
        ${size ? sizeModifier(params) : ''}
    `;
};

export default IconStyles;
