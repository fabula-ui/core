import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/icon-color.modifier';
import sizeModifier from './modifiers/icon-size.modifier';

// Icons JSON
import IconsJSON from '../../../icons/fonts/icons.json';

// Fonts
const fonts = {
    eot: require('../../../icons/fonts/icons.eot'),
    svg: require('../../../icons/fonts/icons.svg'),
    ttf: require('../../../icons/fonts/icons.ttf'),
    woff: require('../../../icons/fonts/icons.woff'),
    woff2: require('../../../icons/fonts/icons.woff2')
}

const fontFace = `
@font-face {
	font-family: 'icons';
	src: url('${fonts.eot}?d26053aa23f5f9282390c829f9b34483?#iefix') format('embedded-opentype'),
		url('${fonts.woff2}?d26053aa23f5f9282390c829f9b34483#icons') format('woff2'),
		url('${fonts.woff2}?d26053aa23f5f9282390c829f9b34483') format('woff'),
		url('${fonts.ttf}?d26053aa23f5f9282390c829f9b34483') format('truetype'),
		url('${fonts.svg}?d26053aa23f5f9282390c829f9b34483') format('svg');
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
                content: '${IconsJSON[name]}'
            }
        }

        // Modifiers
        ${color ? colorModifier(params) : ''}
        ${size ? sizeModifier(params) : ''}
    `;
};

export default IconStyles;
